// type valueTypeOf = "string" | "number" | "boolean";

// function getValueType<Type>(x: Type): object {
//   return { value: x, type: typeof x };
// }
// console.log(getValueType("hello")); // { value: "hello", type: "string" }
// console.log(getValueType(123)); // { value: 123, type: "number" }
// console.log(getValueType(true)); // { value: true, type: "boolean" }

// // 2====================================
// interface IRectangle {
//   length: number;
//   width: number;
// }
// class Rectangle implements IRectangle {
//   constructor(length: number, width: number) {
//     this.length = length;
//     this.width = width;
//   }
//   perimeter() {
//     return this.length * 2 + this.width * 2;
//   }
//   area() {
//     return this.length * this.width;
//   }
// }

// const rectangle1 = new Rectangle(4, 5);
// console.log(rectangle1.area());
// console.log(rectangle1.perimeter());

// // 3========================================
// interface point {
//   x: number;
//   y: number;
// }

// function distance(p1: number, p2: number): number {
//   const dx = p1.x - p2.x;
//   const dy = p1.y - p2.y;
//   return Math.sqrt(dx * dx + dy * dy);
// }
// const p1 = { x: 3, y: 4 };
// const p2 = { x: 0, y: 0 };
// console.log(distance(p1, p2));

// // 4
// interface Icard {
//   suit: string;
//   rank: CardRank;
// }
// enum CardRank {
//   Ace = 1,
//   Two,
//   Three,
//   Four,
//   Five,
//   Six,
//   Seven,
//   Eight,
//   Nine,
//   Ten,
//   Jack,
//   Queen,
//   King,
// }
// const newCardRank: Icard = {
//   suit: "Three",
//   rank: CardRank.Three,
// };
// function higherRankedCard(card1: string, card2: string): string {
//   if (card1 > card2) return card1;
//   return card2;
// }
// console.log("highest card " + higherRankedCard(CardRank.Ace, CardRank.Nine));

// // 5
// class Person {
//   constructor(name: string, age: number, email: string) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }
// const person1 = new Person("John Doe", 30, "john.doe@example.com");
// console.log(person1);

// 6
interface IRectangle {
  length: number;
  width: number;
}
interface ICircle {
  radius: number;
}

type Shape = IRectangle & ICircle;

const myShape: Shape = { width: 2, length: 4, radius: 1 };
function area(x: Shape): number {
  return x.width * x.length * x.radius;
}
console.log(area(myShape));

// 7
function swap<Type>(arg1: Type, arg2: Type): Array {
  return [arg2, arg1];
}
console.log(swap("hello", "world")); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]

// 8
function minMax<Type>(arr: Array): Array {
  let sorted: Array = arr.sort();
  return [arr[0], arr[arr.length - 1]];
}
console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(["apple", "banana", "cherry"])); // ["apple", "cherry"]
// 9

interface Person {
  name: string;
  age: number;
  address: string;
}
interface Developer {
  name: string;
  age: number;
  programmingLanguages: Array<string>;
}

type DeveloperPerson = Person & Developer;

class MyDeveloper implements DeveloperPerson {
  constructor(
    name: string,
    age: number,
    address: string,
    programmingLanguages: Array<string>
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.programmingLanguages = programmingLanguages;
  }
}

const myDeveloper = new MyDeveloper("John Doe", 30, "123 Main St", [
  "JavaScript",
  "TypeScript",
]);

console.log(myDeveloper);
