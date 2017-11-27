
function myEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], square);
  }
}

function showElement(item) {
  console.log(item);
}

function myMap(item, callback) {
  // for (var i = 0; i < array.length; i++) {
  //   array[i]
  // }
  var i = callback(item);
}

function square(item) {
  return item*item;
}

tab = [1,2,3,4];
// myEach(tab, showElement);
console.log(myEach(tab, myMap()));
