const os = require('os')

//info about current users
const user = os.userInfo()
console.log(user)

//method return system uptime in second
console.log(`${os.uptime()} senconds`)


const raam = os.endianness()
console.log(raam)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOS)
