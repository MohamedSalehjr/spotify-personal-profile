require("dotenv").config()
const express = require('express');
const queryString = require('query-string');
const axios = require('axios');
const app = express();
const port = 8888;

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI


app.get('/', (req, res) => {
    
})

app.get("/login", (req, res) => {
    const scope = 'user-read-private user-read-email'
    const queryParams = queryString.stringify({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: scope
    })
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`)
})

app.get('/callback', (req, res) => {

    const code = req.query.code || null;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: queryString.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
        if (response.status === 200) {

            const { access_token,expires_in } = response.data;

            const queryParams = queryString.stringify({
                access_token,
                expires_in
            })
            
            //React app
            res.redirect(`http://localhost:3000/?${queryParams}`)

          } else {
            res.redirect(`/?${queryString.stringify({error:
            "invalid token"})}`)
          }
    })
    .catch(error => {
      res.send(error);
    });
})



app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})