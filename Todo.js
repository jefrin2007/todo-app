
function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task;

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function(event) {
        event.stopPropagation();
        li.remove();
    };

    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
