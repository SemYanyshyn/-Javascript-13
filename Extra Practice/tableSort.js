let table = document.querySelector("table");
let tbody = document.querySelector("tbody");
let tr = tbody.querySelectorAll("tr");

let arr = Array.from(tr);

arr.sort((a, b) =>
  a.cells[0].textContent.localeCompare(b.cells[0].textContent, "uk")
);

arr.forEach((row) => tbody.append(row));
