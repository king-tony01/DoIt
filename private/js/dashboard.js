import { loadTasks, taskPage } from "./task.js";
export function dashboard(task) {
  const tasks = loadTasks();
  if (tasks.exists) {
    const { data } = tasks;
    document.querySelector(
      ".page"
    ).innerHTML = `<h2 class="title">Dashboard</h2>          
            <section class="dashboard">
            <div class="summary">
              <div class="summary-card">
                <img src="/assets/icons/tasks_main.png" alt="" />
                <div>
                  <b>${data.length}</b>
                  <small>Total Tasks</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/completed.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Completed</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/pending.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Pending</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/overdue.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Overdue</small>
                </div>
              </div>
            </div>
            <p>Performance in the last 1 week</p>
            <canvas id="chart" class="chart"></canvas>
            <div class="history">
              <div class="history-head">
                <h4>History</h4>
                <button id="see-all">See All</button>
              </div>
              <div class="task-con">
                <img src="/assets/icons/tasks_main.png" alt="" />
                <div class="task-wrap">
                  <b>${data[0].title}</b>
                  <p>
                   ${data[0].desc}
                  </p>
                  <div class="status-con">
                    <div class="medium">${data[0].level}</div>
                    <div class="status completed">
                      <i class="fas fa-check"></i>Completed
                    </div>
                  </div>
                  <small class="time">MON 23 NOVEMBER 2023</small>
                </div>
              </div>
            </div>
          </section>`;
    document.getElementById("see-all").addEventListener("click", () => {
      taskPage();
      document.getElementById("task-tab").classList.add("active");
      document.getElementById("dashboard-tab").classList.remove("active");
    });
  } else {
    document.querySelector(
      ".page"
    ).innerHTML = `<h2 class="title">Dashboard</h2>          
            <section class="dashboard">
            <div class="summary">
              <div class="summary-card">
                <img src="/assets/icons/tasks_main.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Total Tasks</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/completed.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Completed</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/pending.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Pending</small>
                </div>
              </div>
              <div class="summary-card">
                <img src="/assets/icons/overdue.png" alt="" />
                <div>
                  <b>0</b>
                  <small>Overdue</small>
                </div>
              </div>
            </div>
            <p>Performance in the last 1 week</p>
            <canvas id="chart" class="chart"></canvas>
            <div class="history">

            </div>
          </section>`;
  }
}
