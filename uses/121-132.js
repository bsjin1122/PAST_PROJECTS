/* 121 API 읽는 법 (path[, mode]) 
// mode를 넣어도 되고 안 넣어도 된다.
fs.access('c:\es6-nodejs\intermediate\node.txt', (string)=> console.log(string));
이게 무슨 뜻?

[] : optional 
fs.access('./', ()=> {}) 파라미터 두 개 path와 callback만 넘겨도 되고, 

즉, 
fs.access(path[, mode], callback) 은 다음과 같이 쓸 수 있다는 것을 한 줄로 표현.
=fs.access(path, callback)
=fs.access(path, mode, callback)*/




/* 122 비동기(Async)와 동기(Sync)
자바스크립트는 웹 브라우저에서 출발했기 때문에 비동기 실행을 기본으로 하는 기능들이 많다. 
* 비동기 : 쉽게) return 이 없는 실행을 뜻한다.  
왜 다루기 힘든 비동기 방식을 많이 사용할까? return 값을 받으려면 프로그램은 응답이 올 때까지 기다려야 한다. 
실행시간에 포함되기 때문에 실제 속도가 늦다. 

비동기 방식은 1번 비서부터 100번 비서한테 동시에 각 번호별 페이지를 호출해서 저장하라는 명령을 내린다. 
그러면 100명의 비서가 동시에 한 페이지씩 맡아서 처리한다.

비동기가 무조건 좋은 것만은 아니다. 쇼핑몰에서 결제하는 로직을 만들 때, 돈이 들어 있는 DB를 비동기로 처리하면 문제가 생길 수 있다. 
그래서 동기와 비동기의 장단점을 알고 쓰자. 

이러한 비동기 방식의 장점은 살리고 단점은 줄이면서 프로그램의 구조도 체계적으로 유지하기 위해 나온 기법이 
함수형 프로그래밍이다. */




// 123 파일로 출력하기 fs.write()
const fs = require('fs');

const contents = 'hello\nbye\n안녕';
fs.writeFile('./uses/123text1.txt', contents, 'utf8', function(error){
	console.log('write end');
}); //대부분의 함수가 파일이 없을 경우 에러를 발생시킴




// 124 동기로 파일 열기 fs.readFileSync()
const data = fs.readFileSync('./uses/123text1.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);
/* readFileSync 함수는 동기적 읽기 함수로, 
함수가 실행되면 해당 파일을 읽으면서 다른 작업을 동시에 할 수 없게 된다.
동기로 파일을 읽는 방법이 동시성을 해치기 땜누에 프로그램 실행을 느리게 할 순 있지만, 
설정 파일을 읽고 적용해야 하거나 사용자 로그 파일을 보고 출입을 허가 해야 하는 등 
실행 순서를 반드시 보장해야 할 때 등 활용할 수 있는 상황이 많다. */





// 125 비동기로 파일 열기 fs.readFile()
fs.readFile('./uses/123text1.txt', (err, data)=> { 
//return 이 없기 때문에 다음 실행할 로직을 callback 함수를 이용해 넘겨주고, 바로 이어서 실행하는 구조
    if(err) throw err; //해당 경로에 파일이 없는 등의 이유인 경우 에러 발생 
    console.log('async work01');
    console.log(data.toString());
});
/* 비동기 방식은 동기 방식에 비해 속도가 빠르기 때문에 실제 프로젝트에서도 많이 사용한다. 
    속도가 빠르기 때문에 실제 프로젝트에서도 많이 사용하는 방식이다. 
    순서 중요 => 동기 방식 / 순서 중요x => 비동기 방식
*/



// 126 파일 내용 수정하기 (비동기)
// fs.readFile('./123text1.txt', (err, data)=> {
//     if (err) throw err;
//     let contents = data.toString();
//     contents = 'replaced test file';
//     fs.writeFile('./123text1.txt', contents, 'utf-8', (err)=> { //err 추가
//         console.log('replace end!');
//     });
// });




// 127 파일에 내용 추가하기 fs.appendFile()
const list = [1, 2, 3, 4, 5];
list.forEach(item => {
    fs.appendFile('./uses/127chapters.txt', `chapter ${item}\n`, (err)=> {
        console.log(err);
    });
});
// 한 줄씩 추가될 때 순서는 비동기이기 때문에 랜덤하게 된다!




// 128 디렉토리 만들기 fs.mkdirSync()
const dirName = `${__dirname}/128-mkdir-test`; // 실행 환경 디렉토리의 절대경로를 받아오게 된다. 
// 본 소스파일이 들어있는 디렉토리까지의 절대경로에 /폴더명 으로 하위 디렉토리 이름을 설정하였다.
if(!fs.existsSync(dirName)){ // 지정한 디렉토리가 있는지 확인하는 함수 
    fs.mkdirSync(dirName);
}
/*디렉토리의 경로에는 절대경로와 상대경로가 있다. 절대경로는 고유한 경로로 루트 디렉토리, 즉
윈도우 환경에서는 C:\, 리눅스 환경에서는 /인 루트 디렉토리부터 현재 디렉토리까지의 모든 경로(path)를 
나타낸다. 
상대경로는 이와 달리 현재 자신이 있는 위치 디렉토리를 기준으로, 상위/하위 디렉토리를 나타낸다.*/




// 129 파일 리스트 출력하기 
console.log('-------------');
const testFolder = './intermediate/';
const filenameList = fs.readdirSync(testFolder); 
// 디렉토리의 경로를 받아 해당 경로에 있는 파일 리스트를 배열로 저장하는 함수이다. 
console.log('파일리스트 : ', filenameList, '------------');
//filenameList.forEach((fileName)=> {console.log(fileName);})




// 130 list 를 json 형식으로 파일에 저장하기, JSON.stringify()
const userList = [
    {name: 'gil', age: 29},
    {name: 'jiji', age: 27}
];

// fs.writeFile('./uses/130listJson.json', JSON.stringify(userList), (err)=> {
//     console.log(err);
// });





// 131 파일을 json 형식으로 불러오기, JSON.parse()
fs.readFile('./uses/130listJson.json', (err, data)=> {
    if(err) throw err;
    const json = JSON.parse(data.toString());
    console.log('name: ', json[0].name);
    console.log('name: ', json[1].name);
    console.log('------131. the end!------');
});




// 132 파일 이름 바꾸기 
const renameFile = (fromFilePathName, toFilePathName)=> {
    fs.rename(fromFilePathName, toFilePathName, (err)=> {
        if(err) console.log(`ERROR: ${err}`);
    });
};
const fromFilePathName = './uses/123text1.txt';
const toFilePathName = './uses/123-test.txt';

renameFile(fromFilePathName, toFilePathName);