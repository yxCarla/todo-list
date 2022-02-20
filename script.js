
var dateBox = document.getElementById('customDate');
const date = new Date().toDateString();
dateBox.innerHTML = date;


let savebutton = document.getElementById('save');
savebutton.addEventListener('click', function() {
    
  var taskList = document.getElementById('test').textContent;
  localStorage.setItem('taskLists', taskList);
  console.log(taskList);
})

let loadbutton = document.getElementById('load');
loadbutton.addEventListener('click', function() {
  var taskList = document.getElementById('test');
  var list = document.getElementById('test');
    var names = localStorage.getItem('taskLists');
    const nameArray = names.split();
    nameArray.join('\n ');
    if (names !== null) {
      list.innerHTML = '' + nameArray;
    }
    else {
      list.innerHTML = taskList;
    }
    console.log(names);
    //document.getElementById('listoftask').innerHTML = taskList;
})


function addTask() { 

    var br = document.createElement('br');

    var task = document.getElementById('tasks');
    //list.appendChild(task.value + '\n');
    var test = document.getElementById('test');
    test.appendChild(br.cloneNode());
    test.append('\n • \n' + task.value);
    test.appendChild(br.cloneNode());


    let form = document.getElementById('form');
    form.style.display = 'none';
    task.value = '';


};


function addAnother() {

   let form = document.getElementById('form');
   form.style.display = 'block';
   
}