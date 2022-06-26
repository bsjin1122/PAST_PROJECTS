const request = require('request');
const iconv = require('iconv-lite'); // 인코딩을 iconv-lite로 변환해주는 모듈을 불러온다. 
const charset = require('charset'); //charset 값을 알게 해주는 모듈을 불러 온다.


/*
request에 여러 가지 파라미터를 사용하여 홈페이지를 다운로드 하기 위해 요청한다. 
*/
const crawl = (callback) => queryString => request({ 
    url: 'https://www.google.com/search',
    encoding: null,
    method: 'GET',
    qs: queryString, //크롤러를 이후 사용할 때 인자로 전달되는 값을 이용한다.
    timeout: 30000, //단위 밀리초, 10초 이후 응답을 포기한다.
    followRedirect: true,  // 리다이렉션할 경우 사이트 이동을 허용할 것인지
    maxRedirects: 10 //최대 리다이렉션을 몇 번 할지 설정
}, (error, response, body)=> {
    if(!error && response.statusCode === 200 ){
       console.log('실행됨');
        const enc = charset(response.headers, body); //헤더 정보에서 인코딩 정보를 받아온다.
        const decodeResult = iconv.decode(body, enc).toString(); //해당 사이트의 인코딩 방식으로 body를 디코드 한다. 깨짐을 방지하기 위해 
        console.log('-----------------', decodeResult);
        callback(decodeResult); 
    }else {
        console.log(`error${response.statusCode}`);
    }
});

module.exports.crawl = crawl; //크롤러 객체 자체를 외부에서 사용할 수 있도록 모듈을 추출한다. 