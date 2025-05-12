let text = "Hello I am sumit. sumit lives in Kathmandu.";
console.log(text);
let value = document.getElementById("regex");
value.innerText = text;

let modified = text.replace(/sumit/gim, "Diwash");
//let modified = text.replace(/sumit/gi, "Shyam");
//let modified = text.replace(/sumit/g, "Shyam");

let value2 = document.getElementById("regexnew");
value2.innerText = modified;