class CreateTask {
  constructor(title, dueTime, priority) {
    this.title = title;
    this.dueTime = dueTime;
    this.priority = priority;

  }
}

class CreateProject {
  constructor(title, dueTime, priority, id) {
    this.title = title;
    this.dueTime = dueTime;
    this.priority = priority;
    this.id = id;
    
    this.tasks = [];
    
    
  }
}

export { CreateProject, CreateTask };
