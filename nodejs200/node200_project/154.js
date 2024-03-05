const ejs = require('ejs');
const fs = require('fs');
const http = require('http');

http.createServer((request, response)=> {
    fs.readFile('./node200_project/154-ejs.ejs', 'utf-8', (err, data)=>{
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        response.end(ejs.render(data)); //render() ejs 문자열을 HTML 문자열로 변경 
    });
}).listen(50000, ()=> {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
});

/*
<% 코드 %> js 코드 입력 
<%= 코드 %> 데이터 출력
*/