export const test = () => {
    console.log('test');

    const name:string = 'KENTO'
    console.log(name);
    const age:number = 25;

    const stringArray:string[] = ['A', 'B', 'C']; //変数をstring型の配列で定義

    const reverseArray = (normalArray:string[]): string[] => { //引数＆返り値をstring型の配列で定義
        const reversedArray:string[] = normalArray.reverse();
        return reversedArray;
    }

    console.log(reverseArray(stringArray));


}