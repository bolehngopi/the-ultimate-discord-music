module.exports = ({
    name: "info",
    code: `$color[RANDOM]
$title[**__Song Info__**]
$description[**Song Nam** [$songInfo[title]\\]($songInfo[url])]
$addField[:stopwatch:| Duration:;**__$songInfo[duration]]__**]
$addField[:dvd: | Added by:;**__$songInfo[userID]__**]
`
})