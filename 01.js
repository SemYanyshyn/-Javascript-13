function showNotification(elements) {
  let text = document.createElement("div");
  text.innerHTML = elements.html;
  text.classList.add("message");
  text.style.top = (elements.top || 0) + "px";
  text.style.right = (elements.right || 0) + "px";

  document.body.append(text);
  setTimeout(() => text.classList.add("show"), 10);

  setTimeout(() => {
    text.classList.add("hide");
    setTimeout(() => text.remove(), 600);
  }, 1500);
}

showNotification({
  top: 10,
  right: 10,
  html: "🎉 Special Offers & Discounts<br>⏰ Valid today 10:00-20:00<br>💰 Up to 50% OFF!",
});
