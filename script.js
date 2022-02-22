// date functions

const dateBox = document.getElementById('customDate');
var date = new Date().toDateString();
var dateTime = new Date().toLocaleString();
dateBox.innerHTML = date;


// save button function

let savebutton = document.getElementById('save');
savebutton.addEventListener('click', function () {

  // commented code, will fix when time available
  var taskList = document.getElementById('test');
  /*if (taskList.value === '') {
    var prealert = document.getElementById('alert');
    prealert.innerHTML = `You don't have any tasks to save! Add some by clicking "Add Task"`;
  }
  */
  //else {
  localStorage.setItem('taskLists', taskList);
  // console log for testing
  console.log(taskList);
  window.alert('To-Do List successfully SAVED at ' + dateTime + '!');
  //}

})


// load button function 

let loadbutton = document.getElementById('load');
loadbutton.addEventListener('click', function () {
  var taskList = document.getElementById('test').textContent;
  var list = document.getElementById('test');
  var prealert = document.getElementById('alert');

  // test code

  //var br = document.createElement('br');
  //test.appendChild(br.cloneNode());

  var names = localStorage.getItem('taskLists');
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  //names.concat(br.cloneNode());
  const nameArray = names.split('a');
  nameArray.forEach(addCheck);
  console.log(nameArray);


  let nameArrayJoined = '<br>' + nameArray.join('<br>\n •');
  console.log(nameArrayJoined);
  console.log(names);
  // error if no previous list
  if ((names === '') || (taskList = '')) {
    prealert.innerHTML = 'Whoops! There are no previous lists! Create a new list by clicking "Add Task"';
    //var prealert = document.getElementById('alert');
    //prealert.style.display = 'none';
    console.log('No Returned Data');
  }
  else {
    //var prealert = document.getElementById('alert');
    prealert.style.display = 'none';
    list.innerHTML = nameArrayJoined;

  }

  // clearing input form
  let form = document.getElementById('form');
  form.style.display = 'none';


  //document.getElementById('listoftask').innerHTML = taskList;
})

function addCheck(value) {
  var names = localStorage.getItem('taskLists');
  const nameArray = names.split('a');
  console.log(nameArray); // THIS ONE
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  let nameArrayJoined = '<br>' + nameArray.join(' <br>\n') + '(delete)';
  nameArrayJoined += checkbox, nameArrayJoined;
  console.log(nameArrayJoined);
}


// clear button function 

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
  var taskList = document.getElementById('test').textContent;
  taskList = '';
  var prealert = document.getElementById('alert');
  prealert.innerHTML = 'No Tasks Yet!';
  var list = document.getElementById('test');

  localStorage.setItem('taskLists', taskList);
  var names = localStorage.getItem('taskLists');
  list.innerHTML = names;
  let form = document.getElementById('form');
  form.style.display = 'none';

  // for clearing
  //var p = document.getElementsByTagName('p')[0];
  //p.style.display = 'block';
  if (prealert.innerHTML == 'No Tasks Yet!') {
    window.alert('To-Do List successfully CLEARED!');
  }
})


// to add a task

function addTask() {

  var br = document.createElement('br');
  var prealert = document.getElementById('alert');
  prealert.innerHTML = '';

  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.onclick = checkTick();
  //var p = document.getElementsByTagName('p')[0];
  //p.style.display = 'none';
  var task = document.getElementById('tasks');
  //list.appendChild(task.value + '\n');
  var test = document.getElementById('test');
  //test.appendChild(br.cloneNode());
  test.append(checkbox, task.value, ' (delete)', br.cloneNode());
  //test.appendChild(br.cloneNode());
  console.log(test);


  let form = document.getElementById('form');
  form.style.display = 'none';
  task.value = '';


}

// to add another task form input

function addAnother() {

  let form = document.getElementById('form');
  form.style.display = 'block';
  var prealert = document.getElementById('alert');
  prealert.innerHTML = '';
}

// to cross out when checked off 

function checkTick() {

}