// 150 한글 깨지는 문제 해결하기 - 웹 페이지에서 데이터를 수집할 때 한글 인코딩이 깨지는 문제
const request = require('request');
const iconv = require('iconv-lite'); //인코딩을 변경해주는 모듈

request({
    url: 'https://www.google.com/search', //검색결과 받는 url 호출
    method:'GET', 
    qs: {q: '신사역 맛집' },  // 쿼리 스트링 약자 
    encoding: null,
    //qs: {q: 'major league baseball' },  // 쿼리 스트링 약자 
    //url을 만들 때 주소 뒤에 ?, & 등으로 붙이는 것 
    // 구글에서는 q라는 이름으로 키워드를 받아서 처리한다. 
}, (err, response, body)=> {
    const decodedResult = iconv.decode(body, 'euc-kr');
    console.log(decodedResult);
});