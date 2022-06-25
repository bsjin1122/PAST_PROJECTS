/* 138 http-request, url 속성 활용
Node.js 에서는 URL 모듈을 통하여 URL 문자열을 객체로 바꾸거나 
URL 객체를 문자열로 변환하여 URL과 관련된 정보를 가져올 수 있다.
parse(), format(), resolve() 총 3가지 메소드를 가지고 있다. 
이 중 사용자로부터 문자열 형식으로 받은 URL 요청을 처리하기 위해 'parse()'가 가장 많이 활용된다.

parse() : URL 문자열을 입력하면 URL 객체를 만든다. 'format()'의 반대  
format() : URL 객체를 입력하면 URL 문자열을 반환한다. 'parse()'의 반대  
resolve() :  상대 URL을 절대 URL로 변경한다. 


* request 객체의 속성 
- url: 요청한 URL 정보
- headers : 요청 메시지 헤더 정보
- method : 클라이언트의 요청 방식 
- httpVersion : HTTP 프로토콜의 버전
*/

const fs = require('fs');
const http = require('http'); 
const url = require('url'); // 요청한 url 정보

http.createServer((request, response)=> {
    let pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;
    console.log(request);
    if(pathname ==='/'){
        fs.readFile('./web-server/138-index.html', (err, data)=> {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
            console.log(url.parse(request.url));
        });
    }else if(pathname ==='/web-server'){
        // http://127.0.0.1:50000/web-server 로 접속하면
        fs.readFile('./web-server/136-example.html', (err, data)=> {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
            console.log(url.parse(request.url));
        });
    }
}).listen(50000, ()=> {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
})