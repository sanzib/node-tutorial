const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.write('welcome to our homepage')
        res.end()
    }
    else if(req.url ==='/about'){
        res.write('here is our short history')
        res.end()
    }
    else {
    res.end(`
    <h1>OOoops!</h1>
    <p>We cant seem to finf page you are looking for</p>
    <a href="/">Back home</a>
 `)
    }
    
})

server.listen(4000)