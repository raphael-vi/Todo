import './style.css';
import submitItem from './item';
import { CreateTask } from './CreateTask';


document.addEventListener("DOMContentLoaded", function () {
    const taskSection = document.querySelector('#task-section');
    const open = document.querySelector('.open-form');
    const dialog = document.getElementById('favDialog');
    const form = document.querySelector('#task-form');

    
    open.addEventListener("click", () => {
        dialog.showModal();
        

    });

    let taskList = [];

    form.addEventListener('submit', function (event){
        event.preventDefault();

        

        

        const title= document.querySelector('#title-input').value;
        const dueTime = document.querySelector('#due-time-input').value;
        
        const task  = new CreateTask(title, dueTime);
        
        const item = submitItem(task);


        taskSection.appendChild(item)
        taskList.push(item)

        dialog.close();
        console.log(taskList);


        
        
    });

    
    const deleteItem = document.querySelector("#delete-item-button");
    const completeItem = document.querySelector("#complete-item-button");

    deleteItem.addEventListener('click', function(event){
        event.target.removeParent();

    })


   


});

