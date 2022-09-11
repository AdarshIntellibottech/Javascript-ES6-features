setTimeout(function () {
  console.log('an asynchrounous function got triggered');
}, 5000);

//setTimeout function will be executed after 5 seconds

function x(y) {
  console.log('x function executed');
  y();
} // x is a normal function where y is passed in the parameter

x(function y() {
  console.log('Y function executed');
});
//here im calling x function where function y logic is written inside a parameter
