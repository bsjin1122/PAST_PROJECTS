/* 041 try catch
예외가 날 것 같은 곳에 try catch를 걸어 프로그램이 멈추는 것을 예방한다.
에러가 나면 프로그램이 가만히 있는 것이 아니고 프로그램이 메모리에서 내려온다. '프로그램이 죽는다'
try catch를 걸어놓았기 때문에 에러가 발생해도 프로그램이 멈추지 않고 끝까지 실행되는 것을 알 수 있다.*/

try { //에러가 날 것 같은 부분에 감싸준다.
    printMessage('hello'); //실행하고자 하는 코드
} catch (error) {
    console.log('error: ', error); //왜 문제가 발생했는지를 알 수 있음
}
console.log('program finished');




// 042 try catch final 
const printHello = () => console.log('hello');

try{
    printHello();
}catch(error){
    console.error(error); //실행되지 않는다. 
}finally{
    console.log('finally1');
}

try{
    printBye(); //실행할 코드
}catch(error){
    console.error(error); //에러가 났을 때 실행할 코드
}finally{
    console.log('finally2'); //에러 발생 여부에 상관없이 실행하는 코드
}

console.log('---------043---------');


// 043 전역 객체 : 따로 선언할 필요없이 자유롭게 사용할 수 있는 객체 
// ref: https://nodejs.org/api/globals.html
// process : 현재 동작 중인 프로세스의 정보
// - argv: 프로세스를 실행할 때 전달되는 파라미터 정보
// - exit() : 프로세스를 끝내는 메소드
console.log('process.env-----------------------------------');
console.log('컴퓨터 환경과 관련 정보를 가진 객체 :',process.env); //환경변수 정보
console.log('process.arch-----------------------------------');
console.log('프로세서의 아키텍처 :', process.arch);  
console.log('process.uptime------------------------------------');
console.log('현재 프로그램이 실행된 시간 :',process.uptime()); 
console.log('process.memoryUsage()------------------------------------');
console.log('메모리 사용 정보를 가진 객체 :', process.memoryUsage()); 
console.log('process.version------------------------------------');
console.log('Node.js 버전 :', process.version);
console.log('process.versions------------------------------------');
console.log('Node.js 버전2 :', process.versions);

//console
console.log('Number: %d + %d = %d', 1, 2, 3+4);
console.log('String: %s', 'Hello World!');
console.log('JSON: %j', { name: 'node.js' });
console.log('String1', 'String2.');

/* 1. process: 현재 동작 중인 프로세스의 정보
2. console: 콘솔 출력 
3. buffer : 이진 데이터를 다루는 버퍼 클래스
4. require(): 모듈 로딩
5. __filename, __dirname: 언더 스코어(_) 2개, 현재 폴더 경로와 파일 경로
6. module, exports: 로딩된 모듈 정보와 모듈로 타입, 객체 노출 시키기
7. Timeout : 타이머, 반복 함수 */





// 046 function, return
const sum = (a,b) => { // a, b -> parameter 매개변수
    const r = a + b;
    return r;
};

const result = sum(100, 200); //100, 200 -> argument 인자값
console.log(result);





// 048 function 선언 방법
// 1. 함수 선언식(Function declaration)
function printMessage1(message){
    console.log(message);
}

// 2. 함수 표현식(Function expression)
const printWelcome = function() { // 익명함수: 변수에 넣지 않은 이름이 없는 함수
    console.log('welcome');
}

printMessage1('bye');
printWelcome();

//괄호를 쓰지 않음
const pm = printMessage1;
pm('good morning');
console.log('type of pm : %s', typeof pm); //function




// 049 일급 객체 (first-class citizens) 
// 변수에 넣거나 함수에 파라미터로 전달할 수 있는 객체 
const plus = (a, b) => {
    return a + b;
}
const minus = (a, b) => {
    return a - b;
}

let p = plus; //함수를 변수로 할당
console.log("typeof plus : %s", typeof plus);//function
console.log("typeof p : %s", typeof p); //function
console.log("10 + 20 = %d", p(10,20)); //30
console.log('---------------------------');
// 함수를 파라미터로 받는 함수 
function calculate(a, b, func){
    return func(a, b);
}
console.log(calculate(10,20,minus));
console.log(calculate(10,20,plus));
console.log('--------------------------');