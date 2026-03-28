// Arithemetic Operators
let a= 5;
let b=10;

console.log("a-b :",a-b);
console.log("a*b :",a*b);
console.log("a+b :",a+b);
console.log("a/b :",a/b);
console.log("a%b :",a%b);
console.log("a **b :",a**b);
console.log("a + 1 :",a + 1);
console.log("b + 1 :",b + 1);
console.log("b++ :",++b);
console.log("a-- :",--a); 

// Assignment operators
console.log("a+1 :", a+=1);
console.log("a-1 :", a-=1);
console.log("a*2 :", a*=2);
console.log("a/2 :", a/=2);
let c=10
c+=4;
console.log("c + 4 :", c);

// comparison operators
{
    let a=5;
    let b=10;
    console.log("a==b :", a==b);
    console.log("a!=b :", a!=b);
    console.log("a>b :", a>b);
    console.log("a<b :", a<b);
    console.log("a>=b :", a>=b);
    console.log("a<=b :", a<=b);
    console.log("a===b :", a===b);
}
{
    let a=10;
    let b="10";
    console.log("a==b :", a==b);//true
    console.log("a===b :", a===b);//false 
}

// Logical Operators
{
    let a = 5;
    let b = 6;

    let condition1= a > b;
    let condition2= a !== 5;
    console.log("condition1 && condition2 :", condition1 && condition2);
    console.log("condition1 || condition2 :", condition1 || condition2);
    console.log("!condition1 :", !condition1);
}


//Ternary Operators
{
    let age = 18;
    let result = age >= 18 ? "adult" : "not adult";
    console.log(result);
}