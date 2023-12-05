import { addTask, taskPage } from "./task.js";

const modal = document.querySelector(".modal");
const levelSelect = document.querySelectorAll(".level-select");
const createBtn = document.getElementById("create");
export function modalWindow() {
  modal.classList.add("active");
}

const closeModal = modal.querySelector(".fa-close");
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  clearForm();
});

const task = {
  id: Date.now(),
  title: "",
  desc: "",
  level: "",
  duration: "",
  completed: false,
};

levelSelect.forEach((select) => {
  select.addEventListener("click", (e) => {
    e.preventDefault();
    levelSelect.forEach((select) => select.classList.remove("active"));
    select.classList.add("active");
    task.level = select.getAttribute("data-id");
  });
});

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = new FormData(document.querySelector("form"));
  for (const [key, value] of form) {
    if (value == "") {
      alert("Fields cannot be empty!\nPlease provide all info.");
      return;
    }
  }
  task.title = form.get("taskTitle");
  task.desc = form.get("desc");
  task.duration = form.get("duration");
  clearForm();
  modal.classList.remove("active");
  addTask(task);
  taskPage();
});

function clearForm() {
  const form = document.querySelector("form");
  form.desc.value = "";
  form.taskTitle.value = "";
}
