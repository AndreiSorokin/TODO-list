const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const tasks = document.querySelector("#tasks");

window.addEventListener('load', () => {
   taskForm;
   taskInput;
   tasks;
})

window.localStorage

taskForm.addEventListener('submit', (e) => {
   e.preventDefault();

   if (!taskInput.value) {
      alert("Please write your taks first");
      return;
   }
   

const new_task_el = document.createElement("div");
new_task_el.classList.add("task");

const task_input_el = document.createElement("input");
task_input_el.classList.add("inputText");
new_task_el.appendChild(task_input_el);
task_input_el.type = "text";
task_input_el.value = taskInput.value;
task_input_el.setAttribute("readonly", "readonly");

tasks.appendChild(new_task_el);

taskInput.value = "";

const task_actions = document.createElement("div");
task_actions.classList.add("buttons");
new_task_el.appendChild(task_actions);
const edit_action = document.createElement("button");
edit_action.classList.add("edit");
edit_action.innerHTML = "Edit";
task_actions.appendChild(edit_action);
const delete_action = document.createElement("button");
delete_action.classList.add("delete");
delete_action.innerHTML = "Delete";
task_actions.appendChild(delete_action);

edit_action.addEventListener('click', ()=> {
   if (edit_action.innerText=="Edit") {
      task_input_el.removeAttribute("readonly");
      task_input_el.focus();
      edit_action.innerText = "Save";
   } else {
      task_actions.setAttribute("readonly", "readonly");
      edit_action.innerText = "Edit";
   }
})

delete_action.addEventListener('click', ()=> {
   tasks.removeChild(new_task_el)
})

})