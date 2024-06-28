const btn = document.getElementById("add_button");
const listContainer = document.getElementById("task_list");

btn.addEventListener('click', () => {
    const input = document.getElementById("input");
    const inputValue = input.value;
    const listWrapper = document.getElementById('task_list');
    
    let li = document.createElement('li');
    li.innerText = inputValue;
    li.classList.add('list_item');
    listWrapper.appendChild(li);
})

listContainer.addEventListener('click', (e) => {

    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
    }
})