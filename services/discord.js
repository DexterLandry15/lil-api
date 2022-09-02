require('dotenv').config()
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const token = process.env.DISCORD_TOKEN;


const rest = new REST({ version: '10' }).setToken(token);

async function get_discord(userid) {
    try {
        let data = await rest.get(Routes.user(userid), {
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = get_discord
