const taskList = document.querySelector('.task-list');

const tasks = [];
const submitItem = function (task){
    const taskItem = document.createElement('li');
    
    const deleteItem = document.createElement('button');
    const completeItem = document.createElement('button');



    const taskTitle = document.createElement('h3');
    const taskDueTime = document.createElement('p');

    
    taskTitle.innerHTML = task.title;
    taskDueTime.innerHTML = task.dueTime;

    completeItem.innerHTML = "<h3> Complete </h3>"
    deleteItem.innerHTML =  "<h3> Delete </h3>"

    completeItem.id = "complete-item-button";
    deleteItem.id = "delete-item-button";
    taskItem.classList.add('task-item');

    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDueTime);
    taskItem.appendChild(deleteItem);
    taskItem.appendChild(completeItem);
    
    tasks.push(taskItem);
    return taskItem;

    

}





export default submitItem;