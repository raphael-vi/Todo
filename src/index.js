import "./style.css";
import { submitTask, submitProject, deleteTask, openProject, showProjects } from "./item";
import { CreateTask, CreateProject } from "./CreateTask";

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.querySelector(".task-list");
  const projectList = document.querySelector("#project-list");
  const open = document.querySelector(".open-form");
  const openProjectForm = document.querySelector(".open-project-form");
  const dialog = document.getElementById("favDialog");
  const projectDialog = document.getElementById("projectDialog");
  const taskForm = document.querySelector("#task-form");
  const projectForm = document.querySelector("#project-form");
  const cancelTask = document.querySelector("#cancel-task");
  const cancelProject = document.querySelector("#cancel-project");
  const taskForProjectForm = document.querySelector("#project-task-form");
  
  const taskProjectDialog = document.querySelector("#task-project-dialog");

  open.addEventListener("click", () => {
    dialog.showModal();
  });
  openProjectForm.addEventListener("click", () => {
    projectDialog.showModal();
  });
  /* Probably insteresting to think of a way to create a function that does
 this things and call it on each eventlisteners, instead of just copying and pasting a 1000 times */

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title-input").value;
    const dueTime = document.querySelector("#due-time-input").value;

    const task = new CreateTask(title, dueTime);
    taskList.innerHTML = "";
    taskList.appendChild(submitTask(task));

    taskList.addEventListener("click", (event) => {
      const targetElement = event.target;
      deleteItem(targetElement);
    });
    dialog.close();
  });

  cancelTask.addEventListener("click", () => dialog.close());

  cancelProject.addEventListener("click", () => projectDialog.close());

  projectForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.querySelector("#project-title-input").value;
    const dueTime = document.querySelector("#project-due-time-input").value;

    const project = new CreateProject(title, dueTime);

    projectList.appendChild(submitProject(project));

    projectDialog.close();

    projectList.addEventListener("click", function (event) {
      const projectId = event.target.dataset.projectId;

      
      if (projectId) {
        projectList.innerHTML = "";
        projectList.appendChild(openProject(projectId));

        taskForProjectForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const taskSection = document.querySelector(".project-task-section");
          const title = document.querySelector("#task-title-input").value;
          const dueTime = document.querySelector("#task-due-time-input").value;
          

          const task = new CreateTask(title, dueTime);

          taskSection.innerHTML = '';
          taskSection.appendChild(submitTask(task, projectId));

          taskSection.addEventListener("click", (event) => {
            const targetElement = event.target;
            deleteItem(targetElement);
          });
          taskProjectDialog.close();
        });
      } else if (event.target.classList.contains("open-form")) {
        taskProjectDialog.showModal();

      } else if (event.target.classList.contains("back")) {
        
        projectList.appendChild(showProjects());
      }
    });
  });

  function deleteItem(target) {
    if (target.classList.contains("delete-item-button")) {
      const taskDiv = target.parentElement;

      taskDiv.remove();
    }
  }
});
