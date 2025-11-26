const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let wrapper = document.createElement("div");
  wrapper.className = "note-box";

  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  let icon = document.createElement("i");
  icon.className = "bx bx-trash delete-btn";

  wrapper.appendChild(inputBox);
  wrapper.appendChild(icon);
  notesContainer.appendChild(wrapper);

  icon.addEventListener("click", () => {
    wrapper.remove();
  });
});
