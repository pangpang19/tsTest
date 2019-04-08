// 布尔值
let isDone: boolean = false;
console.log('布尔值:', isDone);

// 数字
let numberVal: number = 10;
console.log('数字:', numberVal);

// 字符串
let stringName: string = "bob";
console.log('字符串:', stringName);

// 数组
let list:number [] = [1,2,3,4];
let list2:Array<number> = [1,2,3,4];
console.log('数组1:', list);
console.log('数组2:', list2);

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let tuple:[string, number];
tuple = ['11', 10]; // ok
// tuple = [10, '11']; // error

// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {Red=1, Green, Blue}
console.log('Color:', Color);
let c: Color = Color.Green;
console.log('c:', c);


// Any
let notSure: any = 4;
console.log('notSure:', notSure);
let listAny: any[] = [1, true, "free"];
console.log('listAny:', listAny);

// Void 及 函数返回

// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function noReturnFn():void {
    let str = '这是一个没有返回的函数'
};

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// 函数返回
function fnNumber():number {
    // return '1'; // error
    return 1;
}


// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 另一个为as语法：
let strLength1: number = (someValue as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。











 
