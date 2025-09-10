const id = document.getElementById("tree");
const li = tree.querySelectorAll("li");

li.forEach((element) => {
  const ownText = element.firstChild.data;
  const descendants = element.querySelectorAll("li").length;
  if (descendants === 0) {
    return;
  } else {
    alert(`${ownText}: ${descendants}`);
  }
});
