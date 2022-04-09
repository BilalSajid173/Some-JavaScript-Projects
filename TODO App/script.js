document.querySelector(".addtask-btn").addEventListener("click", function () {
    var task = document.querySelector(".addtask-input").value;

    if (task == "")
        alert("Please Enter Something");//prevents empty tasks
    else {
        myFunction(task);
    }
})


function myFunction(task) {
    var list = document.querySelector("#List");

    var node = document.createElement("li");

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    var flag = true;
    var taskfield = document.createElement('input');
    taskfield.classList.add('li-input');
    taskfield.type = "text";
    taskfield.value = task;
    taskfield.disabled = flag;


    var editbtn = document.createElement('button');
    editbtn.classList.add('btn');
    editbtn.type = "button";
    editbtn.innerHTML = "Edit";

    var deletebtn = document.createElement('button');
    deletebtn.classList.add('btn');
    deletebtn.type = "button";
    deletebtn.innerHTML = "Delete";

    node.appendChild(checkbox);
    node.appendChild(taskfield);
    node.appendChild(editbtn);
    node.appendChild(deletebtn);

    list.appendChild(node);

    document.querySelector(".addtask-input").value = "";  //as soon as a task is added, the input field becomes empty

    editbtn.addEventListener("click", function () {
        taskfield.disabled = !flag;
        flag = !flag;
    })

    deletebtn.addEventListener("click", function () {
        node.remove();
    })

    checkbox.addEventListener('change', function (e) {
        if (e.target.checked)
            taskfield.classList.add('completed');

        else
            taskfield.classList.remove('completed');

    })
}
