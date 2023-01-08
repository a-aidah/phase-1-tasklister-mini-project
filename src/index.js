document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let newTask = e.target[0].value;
    taskManage(newTask)
    

  })
});



function taskManage(newInsert) {
  let list = document.createElement('li')
  let edit = document.createElement('i')
  
  edit.addEventListener('click',removeTask)

  const date = new Date();
  const stamp = date.toLocaleString("en-us", {
    hour12: true,
    weekday: "short",
    hour: "2-digit",
    month: "long",
    year: "numeric",
  });
  edit.className = 'fas fa-trash-alt'
  list.textContent = `${newInsert}   (${stamp})`;
  list.appendChild(edit,stamp)
  document.querySelector('#tasks').append(list)
}

function editTask(){
  let edit = document.createElement('i')
  edit
}
function removeTask(e){
  e.target.parentNode.remove()
}