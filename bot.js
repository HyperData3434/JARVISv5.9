const Discord = require("discord.js");

const bot = new Discord.Client();
const token = 'YOUR BOT TOKEN HERE'

bot.on('ready', () => {
  console.log('bot is ready')
})

bot.login(token)