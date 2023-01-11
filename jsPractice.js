var array=['apple','orange','banana','pineapple'];

//  using toString() = which sperates array element with comma = (,)
document.write("1) Comma sperated array: <br>"+array.toString());



document.write("<br><br>");

//  using join() = which sperates array element same as toString but the main difference is we can specifiy the sperator of our choice. ex= array.join("$");
document.write("2) '/' sperated array: <br>"+array.join("/"));


document.write("<br><br>");

// using pop() which removes last element from the array
document.write("3)i) Array before pop(): <br>"+array+"<br><br>");
array.pop();
document.write("3)ii) Array after pop(): <br>"+array);


document.write("<br><br>");

// using push("") which adds element in the last of an array
array.push("Biplab");
document.write("4) Array after push(): <br>"+array); 


document.write("<br><br>");

// using shift() which removes element from the starting of a array.
array.shift();
document.write("5) Array after shift(): <br>"+array+"<br><br>");



// using unshift("") which adds element at the beginning of the array.
array.unshift("Biswas");
document.write("6) Array after unshift(): <br>"+array+"<br><br>");

// using "delete"  to remove element from a specific index.
delete array[2];
document.write("7) Array after 'delete' at index=2 : <br>"+array+"<br><br>");

// using concat(newArray) to merge two arrays togather
var array2=['Sanchari', 'Bubu'];

var newArray= array.concat(array2);
document.write("8) Array after .concat(): <br>"+newArray+"<br><br>");

// splice() is used to add new element in the array with desired positions.
// Syntax-
//     splice(index at, No. of elements to be removed, newElement, newElement,....)

document.write("9)i) Array  before splice(): <br>"+newArray+"<br><br>");
newArray.splice(2,0,'Boro','Dodo')
document.write("9)ii) Array  after splice(): <br>"+newArray+"<br><br>");

// slice() is used to slice out a new array from a specific position in the present array 
// Note: source array is never changed a new array is always created for the sliced array.

document.write("10)i) Array  before slice(): <br>"+newArray+"<br><br>");
var sliced = newArray.slice(3);
document.write("10)ii) Array  after slice(): <br>"+sliced+"<br><br>");

