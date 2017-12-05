function partialAny(func, ...arguments) {
  var bindArgs = arguments.slice();
  
  function wrapper() {                        
    var args = [].slice.call(arguments);
	  var i,j;
	  for(i=0, j=0; i<bindArgs.length; i++){
	      if (bindArgs[i]===undefined){
	      bindArgs[i]=args[j];
	      j++;
	      }
	  }
    while (j<args.length){
    bindArgs.push(args[j]); 
    j++;
    }
    var context=null;
    return func.apply(context, bindArgs);  
  }
  return wrapper;
}

function test(a, b, c) { return 'a=' + a + ', b=' + b + ', c=' + c; }

var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3

test1_3 = partialAny(test, 1, 3, undefined);
console.log(test1_3(5)); // a=1,b=3,c=5
