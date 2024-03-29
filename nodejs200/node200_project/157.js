const pug = require('pug');
const fs = require('fs');
const http = require('http');

http.createServer((request, response)=> {
    fs.readFile('./node200_project/157-pug.pug', 'utf-8', (err, data)=> {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const fn = pug.compile(data);
        response.end(fn());
    });
}).listen(50000, ()=> {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
})