const field = document.getElementById("field");
const ball = document.querySelector(".ball img");

/*
alert(field.clientWidth); // 400

alert(ball.offsetWidth); // 60
*/

let centerWidth = (field.clientWidth - ball.offsetWidth) / 2;
let centerHeight = (field.clientHeight - ball.offsetHeight) / 2;

ball.style.left = centerWidth + "px";
ball.style.top = centerHeight + "px";
/* це як
.ball {
  left: 170px;
}
*/
