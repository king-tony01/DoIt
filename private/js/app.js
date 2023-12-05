import { dashboard } from "./dashboard.js";
import { taskPage } from "./task.js";
const page = document.querySelector(".page");
const tabs = document.querySelectorAll(".tab");
document.addEventListener("DOMContentLoaded", () => {
  dashboard();
});
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    const tabClicked = tab.getAttribute("data-id");
    switch (tabClicked) {
      case "dashboard":
        dashboard();
        break;
      case "task":
        taskPage();
        break;
      case "logout":

      default:
        break;
    }
  });
});
