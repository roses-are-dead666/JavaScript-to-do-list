document.querySelector("#push").onclick = function() {
    if (document.querySelector("#newTask input").value.length == 0) {
        alert("Please enter a New Task")
    } else {
        document.querySelector("#tasks").innerHTML += 
        `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newTask input").value}
                </span>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;
        
        let currentTasks = document.querySelectorAll(".delete");
            for (let i = 0; i < currentTasks.length; i++) {
                currentTasks[i].onclick = function() {
                    this.parentNode.remove(); 
                }
            }
        
        let tasks = document.querySelectorAll(".task");
            for (let i = 0; i < tasks.length; i++) {
                tasks[i].onclick = function() {
                    this.classList.toggle("completed")
                }
            }

        document.querySelector("#newTask input").value = "";
    }
}