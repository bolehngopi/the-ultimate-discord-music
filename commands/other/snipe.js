module.exports = ({
    name: "snipe",
    code: `$color[RANDOM]

$author[$getServerVar[deletedAuthor]]

$description[$getServerVar[deletedMessage]]

$thumbnail[$getServerVar[deletedIcon]]`
})