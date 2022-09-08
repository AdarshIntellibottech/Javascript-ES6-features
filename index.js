//use of spread operator

let student = {
  name: "Adarsh Naik",
  age: 19,
  address : "Shimoga"
}

let student1 = {...student, age:23, name:"Bharath"}

console.log(student1)

// rest operator use in objects
let employee = {
  ename: "atal",
  tech: "react",
  state: "Bihar"
}
const {tech, ...baki}= employee;
console.log(tech)
