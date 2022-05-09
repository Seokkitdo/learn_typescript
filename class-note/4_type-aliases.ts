interface PersonI {
    name: string;
    age: number;
}

type PersonT = {
    name: string;
    age: number;
}

// PersonT로 선언한 것을 타입으로 넣어줄 경우 타입구조를 프리뷰로 볼 수 있다!
let JD: PersonT = {
    name: 'jeongdo',
    age: 27
}

type MyStringT = string;
let strT: MyStringT = 'hello';

type TodoT = {
    id: string;
    title: string;
    done: boolean;
}

function getTodo(todo: TodoT) {

}