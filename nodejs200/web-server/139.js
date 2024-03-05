// 139 http request get
const http = require('http');
const url = require('url');
const port = 50000;

http.createServer((request, response)=> {
    const get = url.parse(request.url, true).query;

    if(request.method === 'GET'){
        response.writeHead(200, {'Context-Type': 'text/html'});
        response.end(`<h1>${JSON.stringify(get)}</h1>`)
        console.log(`${request.method} 방식의 요청입니다.`)
    }else if(request.method === 'POST'){
        console.log(`${request.method} 방식의 요청입니다.`)
    }
}).listen(port, ()=> {console.log(`서버가 동작 중입니다, http:127.0.0.1:${port}`);});

/* http 프로토콜에서 메시지를 요청하는 방법 가장 많이 (get, post)
가장 큰 차이점, 
get: 단순 요청(키워드를 입력해 검색)
post: 내용을 넣어서 요청(회원가입, id, 인적사항 등)

http://127.0.0.1:50000/?soju=delicious&beer=chicken
get 방식의 매개변수가 JSON 방식으로 출력되는 것을 확인할 수 있다.*/