const discord = require("discord.js");

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages,
    ],
});

client.once('ready', () =>{
    console.log(`logged in as ${client.user.tag}`);
});

client.login(
  "Token"
);
