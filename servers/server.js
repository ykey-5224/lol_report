const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port =process.env.PORT || 3001;
const axios = require("axios");

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> {
    axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%ED%8C%90%EB%8B%A4%EC%82%90?api_key=RGAPI-190a6f56-aea5-4b1b-8fbf-64d957731d7e')
    .then(res => console.log(res))
    .catch(err => console.log(err));
    }
    );

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
//https://ykey-api-server.herokuapp.com/