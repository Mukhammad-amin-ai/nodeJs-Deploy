import http from 'http'
import process from 'node:process'
const PORT = 4000
let pr = process.env

const server = http.createServer((request, response) => {
    response.write(JSON.stringify(pr))
    response.end()
})

server.listen(PORT, () => {
    console.log(`project is working in ${PORT} port`);
})