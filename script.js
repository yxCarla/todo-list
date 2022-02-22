// date functions

const dateBox = document.getElementById('customDate');
var date = new Date().toDateString();
var dateTime = new Date().toLocaleString();
dateBox.innerHTML = date;


// save button function

let savebutton = document.getElementById('save');
savebutton.addEventListener('click', function () {

  // commented code, will fix when time available
  var taskList = document.getElementById('test').textContent;
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
  const nameArray = names.split(' x'); // use delete for split

  // bunch of including stuff that didn't work

  //nameArray.includes(' (delete)');
  //if (nameArray.includes = true) {
    //nameArray.forEach(function() {
      //const index = nameArray.indexOf(' (delete)');
      //nameArray[index] = "<input type='checkbox'>";

      const joinArray = nameArray.pop().split(' ');
      console.log(joinArray);
      //const nameArrayJoined = nameArray.concat("<input type='checkbox'>");
      const finalJoin = 
      "<br><input type='checkbox'>".concat
      (nameArray.join(" <button onclick='checkTick()'>x</button><br><br><input type='checkbox'> ").concat
      (" <button onclick='checkTick()'>x</button> <br>"));
      
      //const nameArrayJoined = nameArray.concat("<input type='checkbox'>");
      console.log(nameArray);
      console.log(finalJoin)
      //console.log(nameArrayJoined);
    //})
  //}
  //nameArray.forEach(addCheck);
  //console.log(nameArray);

// FIX ARRAYS /////

  //let nameArrayJoined = '<br>' + nameArray.join('<br>\n •');
  //console.log(nameArrayJoined);
  console.log(names);
  // error if no previous list
  if ((names === '') || (taskList = '')) {
    prealert.innerHTML = 'Whoops! There are no previous lists! Create a new list by clicking "Add Task"';

    console.log('No Returned Data');
  }
  else {

    prealert.innerHTML = '';
    
    list.innerHTML = finalJoin;

  } 

  // clearing input form
  let form = document.getElementById('form');
  form.style.display = 'none';
})

/*function addCheck(value) {
  var names = localStorage.getItem('taskLists');
  const nameArray = names.split(' \n•');
  console.log(nameArray); // THIS ONE
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  let nameArrayJoined = '<br>' + nameArray.join(' <br>\n') + '(delete)';
  nameArrayJoined += checkbox + value;
  console.log(nameArrayJoined);
  var list = document.getElementById('test');
  list.innerHTML = nameArrayJoined;

  // FIX THIS FUNCTION
}*/


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
  //checkbox.onclick = checkTick();

  var button = document.createElement('button');
  button.innerHTML = 'x';
  //button.onclick = checkTick();

  var ul = document.createElement('ul');
  ul.setAttribute('id', ul.textContent);
  var task = document.getElementById('tasks')
  var test = document.getElementById('test');
// HAD  delete here
  ul.append(br.cloneNode(), checkbox, ' ', task.value, '  ', button, br.cloneNode());
  test.append(ul);
  // testing log
  //console.log(test);


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
/*
function checkTick() {
  var names = localStorage.getItem('taskLists');
  var taskList = document.getElementById('test').textContent;
  const newList = taskList.split(' x');
  console.log(newList);
  localStorage.setItem('taskLists', newList);
  console.log(taskList);
  /*var list = document.getElementById('test');
  list.innerHTML = names;
  
  console.log(names);
  const index = names.indexOf(' x ');

    const nameArray = names.split(' x');
    nameArray.splice(index, index);
    nameArray[index] = '';
    nameArray;
    console.log(nameArray);

  //const nameArray = names.split(' x');
  
  console.log(names);
  */
//}

// create LI element and assign ID?