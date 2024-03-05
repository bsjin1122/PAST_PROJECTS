// 139 http request post
const http = require('http');
const fs = require('fs');
const port = 50000;


http.createServer((request, response)=>{
    console.log(request.method);
    if(request.method === 'GET'){
        fs.readFile('./web-server/140-example2.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'}); // 서버의 응답코드(200)
            response.end(data);
            console.log(`${request.method} 방식의 요청입니다.`);
        });
    }else if(request.method === 'POST'){
        request.on('data', (data)=> { //요청에 데이터가 있으면
            console.log(data);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
            console.log(`${request.method} 방식의 요청입니다.`);
        });
        request.on('error', (err)=> { //요청에 에러가 있으면
            console.log(err);
        });
        request.on('end', ()=> { // 요청의 데이터가 모두 받아졌으면
            response.on('error', (err)=> {console.log(err);})
        });
    }
}).listen(port, ()=> {console.log(`서버가 동작 중입니다, http://127.0.0.1:${port}`);});
/*http.createServer가 완료(결과)가 되는 시점에서 
callback 함수로 데이터를 전달하여 처리하게 되는 원리이다.

- get: 속도가 빠르다는 장점이 있는 반면 정보를 url에 붙여 서버로 전달하기 때문에 입력한 정보가 노출된다.
- post: 입력한 정보를 본문 안에 포함하여 서버에 전달 url 상에 노출되지 않아 보안이 get방식보다 우수,
        데이터 양이 많고 복잡한 자료를 전송할 때 유리하다. 
*/