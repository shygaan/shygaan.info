function randomHex () {
    let characters = "0123456789abcdef"
    let str = ""
    for(let i = 0; i < 6; i++)
        str += characters[Math.floor(Math.random() * 16)]
        return str
}
module.exports = randomHex;