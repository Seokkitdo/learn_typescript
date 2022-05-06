// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number,b: number) {
//     return a + b;
// }

// sum(10, 20);

// 함수의 반환 값에 타입을 정의
function add(): number {
    return 10;
}

// 함수의 타입을 정의하는 방식
// function sum(a: number,b: number): number {
//     return a + b;
// }


// 불필요한 인자가 넘어올 경우 엄격하게 체크해준다.
function sum(a: number,b: number): number {
    return a + b;
}
sum(10, 20, 30);