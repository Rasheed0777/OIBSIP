function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let currentTime = new Date().toLocaleString();

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-time">Added: ${currentTime}</div>

        <div class="btn-group">
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("pendingTasks").appendChild(li);

    taskInput.value = "";
}

function completeTask(button){
    let task = button.parentElement.parentElement;

    button.remove();

    document.getElementById("completedTasks").appendChild(task);
}

function editTask(button){
    let taskText = button.parentElement.parentElement.querySelector(".task-text");

    let updatedTask = prompt("Edit Task:", taskText.innerText);

    if(updatedTask !== null && updatedTask.trim() !== ""){
        taskText.innerText = updatedTask;
    }
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}