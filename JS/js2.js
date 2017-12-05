function sequence(start, step) {
start = start || 0;
step = step || 1;

return function(){
start+=step;
return start-step;
};
}

function take(fn, count) {
var ar = [];

for (let i=0; i<count;i++){
ar.push(fn());
}
return ar;
}

var gen2 = sequence(0, 2);

console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]