const arr = [-4, 3, -9, 0, 4, 1]
var poscount =0;
var negcount =0;
var zerocount =0;
const size = arr.length;
arr.map((data)=>{
  if(data>0)
  {
     poscount += 1;
  }
  else if(data <0)
  {
     negcount += 1;
  }
  else {
     zerocount +=1;
  }
  
})

console.log("size of arr", size)
console.log("positive cases" ,poscount)
console.log("Negative case", negcount)
console.log("Zero count", zerocount)
