
document.getElementById("add_button").addEventListener("click", function(){
    const element = document.getElementById("input");
    const value = element.value;
    console.log(value);

   if ( value.trim() !== ""){
        const taskElement = document.getElementById("task_list");
        let li = document.createElement('li');
        li.textContent = value;

        taskElement.appendChild(li);
        element.value = "";
   }
   else {
    alert("Please enter a task");
   }
})