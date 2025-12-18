const btn = document.getElementById('addTaskButton');

const input = document.getElementById('taskInput');

const tablebody = document.getElementById('taskTableBody');

const defaultrecord = document.getElementById('defaultrecord');


let taskList = [];

counter = 0;


btn.addEventListener('click', function() {

    taskList.push(input.value.trim());

        const row = document.createElement('tr');

    const cell = document.createElement('td');

    cell.innerText = input.value.trim();


     row.appendChild(cell);

    tablebody.appendChild(row);

    counter ++;



   const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', function() {
       
        if(counter == 1){
             confirm("This is the last record. Are you sure you want to delete it?");
        }

            tablebody.removeChild(row);
        
            counter --;
        
    });

     row.appendChild(button);


})










// btn.addEventListener('click', function() {

//     const task = input.value.trim();

//     if (task === '') {
//         alert('Please enter a task.');
//         return;
//     }

 

//     taskList.push(task);

//     input.value = '';

 

//     taskList.forEach(function(task) {

//     const row = document.createElement('tr');

//     const cell = document.createElement('td');

//     cell.innerText = task;

//     const button = document.createElement('button');
//     button.innerText = 'Delete';
//     button.addEventListener('click', function() {
       
      
//             tablebody.removeChild(row);
        

        
//     });

//     cell.appendChild(button);

//     row.appendChild(cell);

//     tablebody.appendChild(row);






//          taskList = [];

         

// })

// });








