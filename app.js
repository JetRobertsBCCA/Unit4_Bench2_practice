// Add a new task
document.querySelector('#todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submission
  
    const taskInput = document.querySelector('#new-task');
    const taskText = taskInput.value.trim();
    if (!taskText) return; // Avoid empty tasks
  
    addTask(taskText);
    taskInput.value = ''; // Clear input after adding task
  });
  
  // Function to add task to the list
  function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;
  
    // Add custom attribute for task creation time
    taskItem.setAttribute('data-created-at', new Date().toLocaleTimeString());
  
    // Create delete button for each task
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-task');
    taskItem.appendChild(deleteBtn);
  
    // Append task to the list
    document.querySelector('#todo-list').appendChild(taskItem);
  }
  
  // Mark task as completed and remove task
  document.querySelector('#todo-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('completed'); // Mark task as completed
    } else if (event.target.tagName === 'BUTTON' && event.target.classList.contains('delete-task')) {
      event.target.parentElement.remove(); // Remove task
    }
  });
  
  // Set a reminder after a certain number of seconds
  document.querySelector('#set-reminder').addEventListener('click', function() {
    const reminderTime = parseInt(document.querySelector('#reminder-time').value, 10);
    if (isNaN(reminderTime)) {
      alert("Please enter a valid number for the reminder.");
      return;
    }
  
    if (document.querySelectorAll('#todo-list li').length === 0) {
      alert("No tasks available for a reminder!");
      return;
    }
  
    setTimeout(function() {
      alert("Reminder: You have pending tasks to complete!");
    }, reminderTime * 1000);
  });

  setInterval(function() {
    const tasks = document.querySelectorAll('#todo-list li');
    tasks.forEach(task => {
      if (!task.classList.contains('completed')) {
        task.classList.add('overdue');
      }
    });
  }, 5000); // Check every 5 seconds

  // show task creation time on hover
  document.querySelector('todo-list').addEventListener('mouseover', function(event){
    if(event.target.tagName === 'LI' && !event.target.querySelector('span')){
        const creationTime = event.target.getAttribute('data-created-at');
        const creationTimeSpan = document.createElement('span');
        creationTimeSpan.innerText = ` (Created at: ${creationTime})`;
        event.target.appendChild(creationTimeSpan);
    }
  });

  //remove the hover text when mouse leaves the list item
  document.querySelector('#todo-list').addEventListener('mouseout', function(event){
    if (event.target.tagName === 'LI'){
        const timeSpan = event.target.querySelector('span');
        if (timeSpan){
            event.target.removeChild(timeSpan);
        }
    }
  });