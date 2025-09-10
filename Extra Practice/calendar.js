// Велика частина gpt. Не розумів як реалізувати логіку
function createCalendar(elem, year, month) {
  let table = document.createElement("table");
  table.className = "border";

  let headerTr = document.createElement("tr");
  let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];
  days.forEach((element) => {
    let th = document.createElement("th");
    th.textContent = element;
    headerTr.append(th);
  });
  table.append(headerTr);

  let d = new Date(year, month - 1);
  let startDay = (d.getDay() + 6) % 7; 

  let dayTr = document.createElement("tr");
  for (let i = 0; i < startDay; i++) {
    let emptyTd = document.createElement("td");
    dayTr.append(emptyTd);
  }

  let daysInMonth = new Date(year, month, 0).getDate();

  for (let i = 0; i < daysInMonth; i++) {
    let day = i + 1;
    let dayTd = document.createElement("td");
    dayTd.textContent = day;
    dayTr.append(dayTd);

    if ((startDay + i + 1) % 7 === 0) {
      table.append(dayTr);
      dayTr = document.createElement("tr");
    }
  }

  if (dayTr.children.length > 0) {
    table.append(dayTr);
  }

  elem.append(table);
}
createCalendar(document.getElementById("calendar"), 2012, 9);
