let a = prompt("enter a number")
let arr = []
for(let i=1;i<=a;i++){
    arr.push(i)
}
console.log(arr.reduce((a,b)=>a*b,1))