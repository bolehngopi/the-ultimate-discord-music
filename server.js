const dbd = require("dbd.js");
const { token, prefix } = require("./config.json");
 
const bot = new dbd.Bot({
token: token, 
prefix: prefix
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: commands.name,
code: command.code
})
} 
}

bot.status({
    text: "with $allMembersCount members! | THE ULTIMATE MUSIC",
    type: "PLAYING",
    time: 12
})

bot.status({
    text: "$allMembersCount members! | THE ULTIMATE MUSIC",
    type: "WATCHING",
})

bot.deletedCommand({
channel: "$channelID",
code: `$setServerVar[deletedIcon;$userAvatar]
$setServerVar[deletedAuthor;$username#$discriminator[$authorID]]
$setServerVar[deletedMessage;$message]`
})

bot.onMessageDelete()

bot.variables({
    deletedMessage: "",
    deletedAuthor: "",
    deletedIcon: ""
})
