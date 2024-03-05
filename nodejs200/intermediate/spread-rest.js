// const slime = {name: '슬라임'};
// const cuteSlime = {name: '슬라임', attribute: 'cute'};
// const purpleCuteSlime = {name: '슬라임', attribute:'cute', color: 'purple'};

const slime = {name: '슬라임'};
const cuteSlime = {...slime, attribute: 'cute'};
const purpleCuteSlime = {...cuteSlime, color: 'purple'};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 배열에서도 사용 가능
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);
// 기존의 animals 는 건드리지 않으면서, 
// 새로운 anotherAnimals 배열에 animals 가 가지고 있는 내용을 모두 집어넣고, 
//'비둘기'라는 항목을 추가적으로 넣었다.


const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);









/* rest
spread 와 생김새는 비슷하나 역할이 매우 다르다. 
rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다. */
const purpleCuteSlime1 = {name:'슬라임', attribute: 'cute', color: 'purple'};
const {color, ...rest} = purpleCuteSlime1;
console.log(color);
console.log(rest);



const numLists = [0, 1, 2, 3, 4, 5, 6];
const [one, ...res] = numLists;
console.log(one); //0
console.log(res);//[1, 2, 3, 4, 5, 6]



// 문제 
const max = (...rest) => {
    return Math.max(...rest);
};
  
// const result = max(1, 2, 3, 4, 10, 5, 6, 7);
const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);