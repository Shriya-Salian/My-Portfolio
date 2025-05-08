function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const span = document.createElement("span");
    span.textContent = taskText;
  
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.className = "delete-btn";
    btn.onclick = () => li.remove();
  
    li.appendChild(span);
    li.appendChild(btn);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }