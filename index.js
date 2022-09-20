let arr1 = [1, 2, 3, 4, 5];

let arr2 = [...arr1];

arr2[3] = 45;
console.log(arr2);
console.log(arr1); //deep copy where references of both arr2 and arr1 is different
