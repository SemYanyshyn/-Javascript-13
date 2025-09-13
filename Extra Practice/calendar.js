// ЮЗАВ GPT бо було важко з логікою 
function createCalendar(elem, year, month) {
  let table = document.createElement("table");

  let headerTr = document.createElement("tr");

  let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

  for (let day of days) {
    let th = document.createElement("th");
    th.textContent = day;
    headerTr.append(th);
  }

  table.append(headerTr);

  let daysInMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month - 1, 1).getDay();
  firstDay = (firstDay + 6) % 7;

  let mainTr = document.createElement("tr");

  for (let i = 1; i <= firstDay; i++) {
    mainTr.append(document.createElement("td"));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let td = document.createElement("td");
    td.textContent = i;
    mainTr.append(td);

    if ((firstDay + i) % 7 === 0) {
      table.append(mainTr);
      mainTr = document.createElement("tr");
    }
  }

  if (mainTr.children.length > 0) {
    table.append(mainTr);
  }

  elem.append(table);
}

let id = document.getElementById("calendar");
createCalendar(id, 2012, 9);
