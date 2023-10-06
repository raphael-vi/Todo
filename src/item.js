const listOfProjects = [];
const listOfTasks = [];

const submitTask = function (task, projectId) {
  if (projectId >= 0) {
    let display = 0;
    for (let i = 0; i < listOfProjects.length; i++) {
      if (listOfProjects[i].id == projectId) {
        listOfProjects[i].tasks.push(task);

        
        display = show(listOfProjects[i].tasks);
        /* Maybe append only the "task" and then add a forEach to create the nodes */
      }
    }

    return (display);

  } else if (!projectId) {
    listOfTasks.push(task);

    console.log(projectId);
    return show(listOfTasks);
  }
  
  

};




function show(listOf) {
  let list = document.createElement("ol");
  
  listOf.forEach((thing) => {
    const taskItem = document.createElement("li");

    const deleteItem = document.createElement("button");
    const completeItem = document.createElement("button");

    const taskTitle = document.createElement("h3");
    const taskDueTime = document.createElement("p");

    taskTitle.innerHTML = thing.title;
    taskDueTime.innerHTML = thing.dueTime;

    completeItem.innerHTML = "<h3> Complete </h3>";
    deleteItem.innerHTML = " Delete";

    completeItem.id = "complete-item-button";

    deleteItem.classList.add("delete-item-button");
    taskItem.classList.add("task-item");

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDueTime);
    taskItem.appendChild(deleteItem);
    taskItem.appendChild(completeItem);

    list.appendChild(taskItem);
  });
  return list;
}

const showProjects = function(){
  listOfProjects.forEach((project)=>submitProject(project, true))
  
}

const submitProject = function (project, show) {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  if (!show) {
    project.id = listOfProjects.length + 1;

    listOfProjects.push(project);

    projectItem.dataset.projectId = project.id;
  }
  
  const projectTitle = document.createElement("h3");
  const projectDueTime = document.createElement("p");
  projectDueTime.innerHTML = project.dueTime;
  
  projectTitle.innerHTML = project.title; 

  projectItem.appendChild(projectTitle);
  projectItem.appendChild(projectDueTime);


  return projectItem;
};

const openProject = function (project) {
  const projectDiv = document.createElement("div");
  const addTask = document.createElement("button");
  const goBack = document.createElement("button");
  addTask.innerText = "Add to project";
  goBack.innerText = "X";

  addTask.classList.add("open-form");
  goBack.classList.add("back");
  projectDiv.classList.add("project-task-section");
  projectDiv.dataset.projectId = project;

  projectDiv.appendChild(addTask);
  projectDiv.appendChild(goBack);

  projectDiv.appendChild(show(listOfProjects));

  return projectDiv;
};

export { submitTask, submitProject, openProject, showProjects};

/*  */
