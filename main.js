// type valueTypeOf = "string" | "number" | "boolean";
var myShape = { width: 2, length: 4, radius: 1 };
function area(x) {
    return x.width * x.length * x.radius;
}
console.log(area(myShape));
// 7
function swap(arg1, arg2) {
    return [arg2, arg1];
}
console.log(swap("hello", "world")); // [ 'world', 'hello' ]
console.log(swap(123, 456)); // [456, 123]
console.log(swap(true, false)); // [false, true]
// 8
function minMax(arr) {
    var sorted = arr.sort();
    return [arr[0], arr[arr.length - 1]];
}
console.log(minMax([3, 1, 5, 2, 4])); // [1, 5]
console.log(minMax(["apple", "banana", "cherry"])); // ["apple", "cherry"]
var MyDeveloper = /** @class */ (function () {
    function MyDeveloper(name, age, address, programmingLanguages) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.programmingLanguages = programmingLanguages;
    }
    return MyDeveloper;
}());
var myDeveloper = new MyDeveloper("John Doe", 30, "123 Main St", [
    "JavaScript",
    "TypeScript",
]);
console.log(myDeveloper);
