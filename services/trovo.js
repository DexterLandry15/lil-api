const axios = require('axios');
const client_id = process.env.TROVO_CLIENT_ID



async function get_trovo(user) {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': client_id
        },
        data: {
            'username': user
        },
        url: 'https://open-api.trovo.live/openplatform/channels/id',
      };

      let res = await axios(options)
      return res
}

module.exports = get_trovo