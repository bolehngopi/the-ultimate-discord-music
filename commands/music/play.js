module.exports = ({
    name: "play",
    aliases: ['p'],
    code: `$description[Playing - \`$playSong[$message;:x: Cannot find song or error]\`]
$onlyIf[$voiceID!=;You need to be in a voice channel!]`
})
