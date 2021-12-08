
let task = []
var taskContainer = document.getElementsByClassName('taskContainer')[0];

function addTask() {
       var curr = document.getElementById('taskField').value;
       task.unshift(curr); 
       taskContainer.innerHTML = task.reduce((inner,current,idx) => {
              return inner +`
              <div class="task" id="task${idx}">
                  <span class="taskDes">${current}</span><button id="deleteBtn${idx}">Delete</button>
              </div>
                `
       },``)
       document.getElementById('taskField').value = "";
       task.forEach((currTask, idx) => {
              document.getElementById(`deleteBtn${idx}`).addEventListener('click', () => {
                     document.getElementById(`task${idx}`).remove(); //removes from HTML document
                     task = task.filter((ele) => {
                            return ele!==currTask;
                     }) 
              })
       })
}
document.getElementById('add').addEventListener('click', addTask);


