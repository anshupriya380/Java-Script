let marks=[45, 77, 32, 22, 11];
let sum=0;

for(let i=0; i<marks.length;i++){
    sum += marks[i];
}
console.log(`The average marks is: ${sum/marks.length}`);