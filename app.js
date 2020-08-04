const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskSubmit = document.querySelector('#task-submit');
const taskGroup = document.querySelector('.task-group');
const clearBtn=document.querySelector('.clear-button');
const filter = document.querySelector('#filter');

loadAllEventListeners();
function loadAllEventListeners(){

    // event for submitting task form
    taskForm.addEventListener('submit', submitTask);

    // Event for deleteing Tasks
    taskGroup.addEventListener('click', deleteTask);

    // Event for clearing all the saved tasks
    clearBtn.addEventListener('click', clearAllTasks)
    // Event for filtering through the Todo List
    filter.addEventListener('keyup', filterTasks);

};


// This function filters through the tasks to chose what to show and what to hide

function filterTasks(e){
    const ballz = filter.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(ballz)!= -1){
          
            task.style.display='flex';
            // task.classList.add('d-flex');
           
        }else{
            task.classList.remove('d-flex');
            task.style.display='none';
        }
    });
}

// function filterTasks(e){
//     const text = e.target.value.toLowerCase();


//     document.querySelectorAll('.list-group-item').forEach(function(task){
//         const item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text) != -1){
//             task.style.display= 'block';
//         }else{
//             task.style.display='none';
//         }
//     });
// }


// This function clears all the tasks saved in the menu
function clearAllTasks(e){
    taskGroup.innerHTML=''
}

// This function deletes the tasks that are added in the menu
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-task')){
        
    if (confirm('Are you sure?')) {
        e.target.parentElement.parentElement.remove();      
      }
    }    
};

// This fucntion is called by another function. the submit task fucntion. It is separated just so the code can be clean
// it basically just creates a task item and puts the value from the form input into it.  
function createTask(){
    let li = document.createElement('li');
    li.className='list-group-item d-flex justify-content-between align-items-center';
    li.innerText= taskInput.value;
    let deleteLink= document.createElement('a');
    // deleteLink.classList.add('delete-task');
    deleteLink.className='delete-task badge badge-danger text-white';
    deleteLink.innerHTML='<i class="fa fa-times"></i>';
    li.appendChild(deleteLink);
    return li;

};

// This function is called in the load all event listeners function. It is triggered whent the submit button from
// the task form is clicked or input entered. 
function submitTask(e){
   if(taskInput.value===''){
       alert('please input a task');
   }else{       
    taskGroup.appendChild(createTask());
    taskInput.value='';

   }

    e.preventDefault();
};




// // set local storage
// localStorage.setItem('name', 'Alaf');
// // set session storage
// sessionStorage.setItem('location', 'lagos');