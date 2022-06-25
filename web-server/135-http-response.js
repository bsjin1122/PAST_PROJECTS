// 135 http 모듈 - response 객체 
// response 객체를 이용해 사용자에게 응답을 주지 않으면 
// 사용자는 접속했을 때 아무런 결과값이 나오지 않는다. 
const port = 50000;
require('http').createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'}); // 응답 헤더 작성
    response.end('Hello World!'); // 응답 본문 작성
    // 웹 페이지에 결과 값을 제공 
}).listen(port, ()=> {
    console.log(`서버가 동작 중입니다, http://127.0.0.1:${port}`);
});