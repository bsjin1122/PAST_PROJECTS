// 모듈 불러오기 
const express = require('express');
const bodyParser = require('body-parser');

// express 생성 
const app = express();

//application/x=www-form-urlencoded 파싱
// extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 
//객체 안에 객체를 파싱할 수 있게하려면 true.
app.use(bodyParser.urlencoded({extended: false}));
//내부적으로 true 를 하면 qs 모듈을 사용하고, false 면 query-string 모듈을 사용한다. 

//application/json 파싱
app.use(bodyParser.json());

app.use(express.static(`${__dirname}`));

app.use((request, response)=> {
    const userId = request.body.userId || request.query.userid;
    const userPassword = request.body.password || request.query.password;

    response.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    response.write('<h1>Login ID와 PW 결과 값입니다.</h1>');
    response.write(`<div><p>${userId}</p></div>`);
    response.write(`<div><p>${userPassword}</p></div>`);
    response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});