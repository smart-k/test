var characters = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

function pluck(objects, fieldName) {
var result = [];
objects.forEach(function (obj) {
for (var key in obj) {
if (key === fieldName) {
    result.push(obj[key]);
		       }
		     }
				});
  return result;
}


console.log(pluck(characters, 'name')); // ['barney', 'fred']

