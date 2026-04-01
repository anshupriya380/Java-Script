let str="Anshu Priya";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

//Template Literals
let obj = {
    name: "Anshu Priya",
    age: 22,
    city: "Delhi",
    ispassed: true
};
console.log("My name is " + obj.name + "and I am " + obj.age + " years old. I live in " + obj.city + ". Am I passed? " + obj.ispassed);
console.log(`My name is ${obj.name} and I am ${obj.age} years old. I live in ${obj.city}. Am I passed? ${obj.ispassed}`);

//escaping characters
let str1 = "I am Anshu Priya.\n I am 22 years old.\n I live in Delhi.\n Am I passed? true";
console.log(str1);