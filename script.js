var dateBox = document.getElementById('customDate');
const date = new Date().toDateString();
dateBox.innerHTML = date;

function addTask() { 

    
    
    
    //var list = document.createElement('div');
    var task = document.getElementById('tasks');
    //list.appendChild(task.value + '\n');
    var test = document.getElementById('test');
    test.innerHTML = task.value;
    //var table = document.getElementById('table');
    //table.innerHTML =  task.value;
    //document.getElementsByTagName('form')[0].appendChild(task.value);

};

/*function addTask() {
    //var table = document.getElementById('table');
    
    document.getElementById('bodyContent').appendChild(list);
    var list = document.createElement('input');
    
    
    list.append("valuetask.value + '\n'");
    //table.appendChild(list);
    
    //list.setAttribute
    var task = document.getElementById('tasks');
    
}
*/
function addAnother() {

    var br = document.createElement("br");
    var form = document.createElement('form');
      form.setAttribute('name', 'task');
    var input = document.createElement('input')
    input.setAttribute("type", "text");
    input.setAttribute('class', 'tasks')
    //form.setAttribute("name", "");
    input.setAttribute("placeholder", "Your Task Here");
    input.setAttribute("value", "");
    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Add');
    submit.onclick = addTask();
    //submit.setAttribute('onclick', 'addTask()');
    form.appendChild(input);

    form.appendChild(submit);
    form.appendChild(br.cloneNode());
    document.getElementsByTagName("div")[2].appendChild(form);
}