
const twitch = require('simple-twitch-api')
const SCOPES = "user:read:email";
let CLIENT_ID = process.env.CLIENT_ID;
let CLIENT_SECRET = process.env.CLIENT_SECRET;

async function get_twitch(user) {
    const request = await twitch.getToken(CLIENT_ID, CLIENT_SECRET, SCOPES);

    const token = request.access_token;
    const client = new twitch.default({
        twitch_client_id: CLIENT_ID,
        token: token
    });

    const get_streams = await client.stream.fetch({
        user_login: [
            user
        ]
    })

    let data = get_streams.data
   return data;
}

module.exports = get_twitch;
