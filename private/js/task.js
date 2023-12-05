"use strict";
import { modalWindow } from "./modal.js";
let tasks = [];
export function addTask(task) {
  const existing = localStorage.getItem("task");
  if (existing) {
    tasks = JSON.parse(existing);
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
  } else {
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
  }
}
export function taskPage() {
  const tasks = loadTasks();
  if (tasks.exists) {
    const { data } = tasks;
    document.querySelector(
      ".page"
    ).innerHTML = `<h2 class="title">Tasks</h2>          
            <section class="tasks">
            <div class="tasks-head">
              <div class="tasks-actions">
                <button class="task-section active">Completed</button
                ><button class="task-section">In Progress</button><button class="task-section">Overdue</button>
              </div>
              <button id="new-task">Add New</button>
            </div>
            <ul class="task-list">
            ${data
              .map((task) => {
                return `<li>
                          <div class="task-con">
                            <img src="/assets/icons/tasks_main.png" alt="" />
                              <div class="task-wrap">
                                <div class="task-wrap-head">
                                  <b>${task.title}</b>
                                  <i class="fas fa-ellipsis-vertical">
                                    <div class="task-menu">
                                      <div onclick='deleteTask("${task.id}")'><i class="fas fa-trash"></i> Delete</div>
                                      <div><i class="fas fa-pen"></i> Edit</div>
                                    </div>
                                  </i>
                                </div>
                                <p>${task.desc}</p>
                                <div class="status-con">
                                  <small class="medium">${task.level}</small>
                                  <div class="status completed">
                                    <i class="fas fa-check"></i>Completed
                                  </div>
                                </div>
                                <small class="time">MON 23 NOVEMBER 2023</small>
                              </div>
                          </div>
                      </li>`;
              })
              .join(" ")}
                </ul>
              </section>`;
    document.getElementById("new-task").addEventListener("click", () => {
      modalWindow();
    });
    const taskSections = document.querySelectorAll(".task-section");
    taskSections.forEach((taskSection) => {
      taskSection.addEventListener("click", () => {
        taskSections.forEach((taskSection) =>
          taskSection.classList.remove("active")
        );
        taskSection.classList.add("active");
      });
    });
  } else {
    document.querySelector(
      ".page"
    ).innerHTML = `<h2 class="title">Tasks</h2>          
            <section class="tasks">
            <div class="tasks-head">
              <div class="tasks-actions">
                <button class="active">Completed</button
                ><button>In Progress</button><button>Overdue</button>
              </div>
              <button id="new-task">Add New</button>
            </div>
              </section>`;
    document.getElementById("new-task").addEventListener("click", () => {
      modalWindow();
    });
  }
}

export function loadTasks() {
  const exist = localStorage.getItem("task");
  if (exist) {
    const tasks = {
      data: JSON.parse(localStorage.getItem("task")),
      exists: true,
    };
    return tasks;
  } else {
    const info = {
      exists: false,
    };
    return info;
  }
}

export function deleteTask(id) {
  const parent = document.getElementById(id);
  parent.remove();
}
