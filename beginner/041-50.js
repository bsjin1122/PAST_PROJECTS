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

