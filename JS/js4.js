function sequence(start, step) {
start = start || 0;
step = step || 1;
return function(){
start+=step;
return start-step;
};
}

function fmap(a, gen) {
return function(){
  return a(gen.apply(fmap,arguments));
};
}

var gen = sequence(1, 1);
function square(x) { return x * x; }

var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16

function add(a, b) { 
  return a + b; 
}

// Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
