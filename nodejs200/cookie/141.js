// 141 쿠키(Cookie) 생성
const http = require('http');

http.createServer((request, response)=> {
    //cookie
    response.writeHead(200, {
    'Content-Type': 'text/html', 
    'Set-Cookie': ['soju = grilledPork', 'beer = chicken']}); // response에 set-cookie 속성을 사용한다.
    // 최초 요청 시 클라이언트가 쿠키값을 가지고 있지 않기 때문에 undefined 라는 결과값을 출력한다.

    //cookie output
    response.end(`<h1>${request.headers.cookie}</h1`);
}).listen(50000, ()=> console.log('서버가 동작 중입니다, http://127.0.0.1:50000'));

/*
쿠키란 인터넷 사용자가 어떠한 웹 사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를 통해 
인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 의미한다. 

쿠키는 서버와 클라이언트에서 모두 저장하고 사용 가능하며, 일정 기간 동안 데이터를 저장할 수 있기 때문에 
로그인 상태를 일정 시간 유지해야 하는 웹 사이트에서 사용합니다. 
그리고 이 기록 파일에 담긴 정보는 인터넷 사용자가 
같은 웹사이트를 방문할 때마다 읽히고 수시로 새로운 정보로 바뀝니다.

해당 쿠키 값은 크롬 브라우저 (개발자도구 > Application > Storage > Cookies)를 통해 확인 가능하다. */