module.exports = ({
    name: "lyrics",
    code: `$title[Lyrics]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;No Lyrics Found for this song.]]
$color[RANDOM]`
})