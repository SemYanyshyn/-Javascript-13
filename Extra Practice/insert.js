let id = document.getElementById("ul");
let li4 = document.getElementById("four");

let li2 = document.createElement("li");
let li3 = document.createElement("li");

li2.id = "two";
li3.id = "three";

li2.textContent = "2";
li3.textContent = "3";

id.insertBefore(li2, li4);
id.insertBefore(li3, li4);
