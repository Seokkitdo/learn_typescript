interface User {
    age: number;
    name: string;
};

// 변수에 활용한 인터페이스
let jd: User = {
    age: 1,
    name: 'jeongdo',
}

// 함수에 인터페이스 활용
function getUserInfo(user: User) {
    console.log(user)
}

const human = {
    name: '캡틴',
    age: 100
}
getUserInfo(human)

// 함수의 스펙(구조)에 인터페이스를 활용
interface AddFunction {
    (a: number, b: number): number
}

let plus: AddFunction;
plus = function(a: number, b: number): number {
    return a +  b;
}


// 인덱싱
// interface StrArray {
//     [index: number]: string;
// }

// let arr1: StrArray = ['a', 'b', 'c'];
// arr1[0] = 10;

// 딕셔너리 패턴
interface StrRegesDictionary {
    [key: string]: RegExp
}

let obj1:StrRegesDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(function(value) {
    console.log(value)
})

// 인터페이스 확장
interface PersonI {
    name: string;
    age: number;
}

interface DeveloperI extends PersonI{
    language: string;
}

let seokdo: DeveloperI = {
    language: 'ts',
    name: 'seok',
    age: 1
}
