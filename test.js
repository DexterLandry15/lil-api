const axios = require('axios');
require('dotenv').config()
const client_id = process.env.TROVO_CLIENT_ID



const options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': client_id
    },
    data: {
        'username': 'mikamore_'
    },
    url: 'https://open-api.trovo.live/openplatform/channels/id',
  };

async function test() {
let res = await axios(options)
return res
}
async function out() {
let res = await test();
console.log(res.data)
}
out()