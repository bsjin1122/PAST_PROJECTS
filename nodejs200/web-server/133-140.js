// 133 http 모듈
const http = require('http');
const port = 50000;
const server = http.createServer();

//이벤트 연결
server.on('request', ()=>{
    console.log('Request!');
})

server.on('connection', ()=>{
    console.log('Connection!');
});

server.on('close', ()=>{
    console.log('Close!');
});

// 웹 서버 생성과 실행 
server.listen(port, ()=>{ // 서버 실행
    console.log(`서버가 동작 중입니다, http://127.0.0.1:${port}`);
});

//웹 서버 종료 
// 서버가 종료된 이후 다시 한 번 해당 URL로 접근을 시도하면 Close가 출력됨을 알 수 있다.
const testClose = () => {
    server.close();
    console.log(`서버가 종료되었습니다, http://127.0.0.1:${port}`);
};

// 강제 서버 종료 
setTimeout(testClose, 10000);
