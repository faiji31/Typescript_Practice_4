const {a : x} = require("./file1")
const {a : z} = require("./file3")

const add = require("./utility/add.js")

console.log(add(x,z))

// console.log(x,z)