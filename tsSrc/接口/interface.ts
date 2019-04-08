// https://segmentfault.com/a/1190000015068063
// TS 类与接口

// 一 前言
// 1.在typescript上遇到过实例化对象的两种写法：implement和extends。extends很明显就是ES6里面的类继承，那么implement又是做什么的呢？它和extends有什么不同？

// 2.还有一个问题就是：typescript 有接口的概念，这个接口和类有什么关系吗？

// 带着以上两个问题我们一起看一下这篇文章。

// 二 正文
// 1.ts中interface与class的区别
// interface:接口只声明成员方法，不做实现。

// class:类声明并实现方法。

// 也就是说：interface只是定义了这个接口会有什么，但是没有告诉你具体是什么。
// 例如：

// interface Point {
//     lng:number;
//     lat:number;
//     sayPosition():void;
// }
// Point interface 里面包含数值类型的经纬度和一个sayPosition函数，但是具体内容没有定义，需要你自己在子类中实现。

// 而class则是完整的实现：

// class Point {
//     constructor(lng,lat){
//         this.lng = lng;
//         this.lat = lat;
//     }
//     sayPosition(){
//         console.log('point:',this.lng,this.lat);
//     }
// }
// 2.extends 与 implement
// （1）extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承。

// （2）java中不支持多重继承，但是可以用接口来实现，这样就要用到implements，继承只能继承一个类，但implements可以实现多个接口，用逗号分开就行了
// 比如:

//  class A extends B implements C,D,E

// 在英文中：
// implements 就是：实现的意思。
// “implement是实现一个接口，要自己实现这个接口的方法”
// implements就是实现的意思,顾名思义它实现一个已经定义好的接口中的方法！如：

// public interface MyInterface{
//     public String MyInterfaceMethod1ToReturnString();
//     public void MyIntefaceMethod2();
//     ......
//     //在这里定义一系列不需要实现的方法，其实现过程"延续到"他的子类中
// }
// 实现接口方法：

// public MyImplClass implements MyInterface{
//     public String MyInterfaceMethod1ToReturnString(){
//          return "My String here!";
//     }
//     public void MyIntefaceMethod2(){
//          //Do something else here!
//     }
// }
// 3.ES6中使用Mixin实现“多重继承”
// 熟悉 JavaScript 的同学应该对 mixin 模式并不陌生。我们说 JavaScript / ES5 的继承模型是基于单一原型链的继承模型，通常情况下，在 JavaScript 实践中完全用原型链来实现继承式的代码复用，是远远不能满足需求的。因此实战中，我们的代码抽象基本上都是采用混合的模式，既有原型继承，也有 mixin 组合。

// 在 ES6 中，我们可以采用全新的基于类继承的 “mixin” 模式设计更优雅的“语义化”接口，这是因为 ES6 中的 extends 可以继承动态构造的类，这一点和其他的静态声明类的编程语言不同。

// const Serializable = Sup => class extends Sup {
//   constructor(...args){
//     super(...args);
//     if(typeof this.constructor.stringify !== "function"){
//       throw new ReferenceError("Please define stringify method to the Class!");
//     }
//     if(typeof this.constructor.parse !== "function"){
//       throw new ReferenceError("Please define parse method to the Class!");
//     }
//   }
//   toString(){
//     return this.constructor.stringify(this);
//   }
// }

// class Person {
//   constructor(name, age, gender){
//     Object.assign(this, {name, age, gender});
//   }
// }

// class Employee extends Serializable(Person){
//   constructor(name, age, gender, level, salary){
//     super(name, age, gender);
//     this.level = level;
//     this.salary = salary;
//   }
//   static stringify(employee){
//     let {name, age, gender, level, salary} = employee;
//     return JSON.stringify({name, age, gender, level, salary});
//   }
//   static parse(str){
//     let {name, age, gender, level, salary} = JSON.parse(str);
//     return new Employee(name, age, gender, level, salary);
//   }
// }

// let employee = new Employee("jane",25,"f",1,1000);
// let employee2 = Employee.parse(employee+""); //通过序列化反序列化复制对象

// console.log(employee2, 
//   employee2 instanceof Employee,  //true 
//   employee2 instanceof Person,  //true
//   employee == employee2);   //false
// 在上面的代码里，我们改变了 Serializable，让它成为一个动态返回类型的函数，然后我们通过 class Employ extends Serializable(Person) 来实现可序列化，在这里我们没有可序列化 Person 本身，而将 Serializable 在语义上变成一种修饰，即 Employee 是一种可序列化的 Person。