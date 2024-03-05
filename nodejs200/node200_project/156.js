const pug =require('pug'); //템플릿 엔진 모듈
const fs = require('fs');
const http = require('http');

http.createServer((request, response)=> {
    fs.readFile('./node200_project/156-pug.pug', 'utf-8', (err, data)=> {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        const fn = pug.compile(data); //compile() pug 문자열을 HTML 문자열로 벼경할 수 있는 함수 생성
        response.end(fn());
    });
}).listen(50000, () => {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
});