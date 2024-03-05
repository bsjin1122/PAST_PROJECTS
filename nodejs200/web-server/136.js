const fs = require('fs');
const http = require('http');
const port = 50000;

http.createServer((request, response)=> {
    fs.readFile('./web-server/136example.html', (err, data)=> {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    })
}).listen(port, ()=> {
    console.log(`서버가 동작 중입니다, http://127.0.0.1:${port}`);
});
/* Content-Type 속성에는 여러가지가 있다. MIME TYPE을 검색하여 찾는다. */