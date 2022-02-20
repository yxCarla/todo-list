var dateBox = document.getElementById('customDate');
const date = new Date().toDateString();
dateBox.innerHTML = date;


function addTask() { 

    
    
    
    //var list = document.createElement('div');
    var br = document.createElement('br');

    var task = document.getElementById('tasks');
    //list.appendChild(task.value + '\n');
    var test = document.getElementById('test');
    test.append('\n • \n' + task.value);
    test.appendChild(br.cloneNode());


    let form = document.getElementById('form');
    form.style.display = 'none';
    task.value = '';
    //var table = document.getElementById('table');
    //table.innerHTML =  task.value;
    //document.getElementsByTagName('form')[0].appendChild(task.value);

};


function addAnother() {

    /*var br = document.createElement("br");

    var form = document.createElement('form');
    form.setAttribute('name', 'task');

    var input = document.createElement('input')
    input.setAttribute("type", "text");
    input.setAttribute('class', 'tasks')
    input.setAttribute("placeholder", "Your Task Here");
    input.setAttribute("value", "");

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Add');
    submit.onclick = addTask();

    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(br.cloneNode());
    document.getElementById('test').innerHTML = form;
    */
   let form = document.getElementById('form');
   form.style.display = 'block';
   
}