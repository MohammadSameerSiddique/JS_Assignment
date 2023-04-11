// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function closure(num1) {
//     return (num2) => {
//         console.log(num1 + num2)
//     }
// };
// let add = closure(5);
// let add2 = closure(15);
// add(10);
// add2(5);


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let arr = [2, 5, 6, 8, 12, 15];
// let findArr = arr.filter(function (val) {
//   if (val >= 3) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(findArr);


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function paragraph (text) {
//     let para = document.createElement("p");
//     para.innerText = text;
//     document.body.appendChild(para);
// };
// paragraph("A new paragraph element to the bottom of an HTML document");


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function createlist (text) {
//     let list = document.createElement("li");
//     list.innerText = text;
//     let unordered = document.getElementById("unorder_list");
//     unordered.appendChild(list);
// };
// createlist("Learn Javascript");
// createlist("Learn React comming soon....");


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function bgcolor (theme) {
//     let color = document.getElementById("style");
//     color.style.backgroundColor = theme;
// };
// bgcolor('red');
// bgcolor('green');
// bgcolor('blue');


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function obj () {
//     let object = {
//         name : "Sameer",
//         rollNo : 124084,
//         course : "JavaScript",
//         instructor : "Sir Ishaq"
//     };
//     let convertString = JSON.stringify(object);
//     localStorage.setItem("object", convertString);
// }
// obj();


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function obj() {
//   let object = {
//     name: "Sameer",
//     rollNo: 124084,
//     course: "JavaScript",
//     instructor: "Sir Ishaq",
//   };
//   let convertobject = (JSON.parse(object)(localStorage.getItem("object")));
//   console.log(convertobject);
// };
// obj();
// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
function saveToLocalStorage(obj) {
    Object.keys(obj).forEach((key) => localStorage.setItem(key, JSON.stringify(obj[key]))
    );

    const storedEntries = Object.keys(localStorage).reduce((entries, key) => {
        entries[key] = JSON.parse(localStorage.getItem(key));
        return entries;
    }, {});

    return storedEntries;
}
let myObj = {
    name: "Tayyaba",
    email: "ta6402792@gmail.com",
    country: "Pakistan",
};

