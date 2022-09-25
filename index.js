const arr = [5,43,2,32,10,67,89,22]
let res = [];

res = arr.filter((elem)=>{
  return elem >= 10
})
console.log(res)