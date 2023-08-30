class CreateTask {
    constructor(title, dueTime, priority) {
        this.title = title;
        this.dueTime = dueTime;
        this.priority = priority;
    }
}

class CreateProject {
    constructor(title, dueTime, priority) {
        this.title = title.value;
        this.dueTime = dueTime.value;
        this.priority = priority.value;    
    }
}

export {CreateProject, CreateTask};


