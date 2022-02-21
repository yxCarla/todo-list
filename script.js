const dateBox = document.getElementById('customDate');
var date = new Date().toDateString();
var dateTime = new Date().toLocaleString();
dateBox.innerHTML = date;

let savebutton = document.getElementById('save');
savebutton.addEventListener('click', function () {

  var taskList = document.getElementById('test').textContent;
  localStorage.setItem('taskLists', taskList);
  // console log for testing
  console.log(taskList);
  window.alert('To-Do List successfully SAVED at ' + dateTime + '!');
})

let loadbutton = document.getElementById('load');
loadbutton.addEventListener('click', function() {
  var taskList = document.getElementById('test').textContent;
  var list = document.getElementById('test');
  var prealert = document.getElementById('alert');
  //var br = document.createElement('br');
  //test.appendChild(br.cloneNode());
    var names = localStorage.getItem('taskLists');
    //names.concat(br.cloneNode());
    const nameArray = names.split('\n •');
    let nameArrayJoined = '<br>' + nameArray.join('<br>\n •');
    if (names = 'undefined') {
      prealert.innerHTML = 'Whoops! There are no previous lists!';
      console.log('No Returned Data');
    }
    
      list.innerHTML = nameArrayJoined;
      var p = document.getElementsByTagName('p')[0];
      p.style.display = 'none';
    
    
    console.log(names);
    //document.getElementById('listoftask').innerHTML = taskList;
})

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
  var taskList = document.getElementById('test').textContent;
  var prealert = document.getElementById('alert');
  prealert.innerHTML = '';
  var list = document.getElementById('test');
  localStorage.setItem('taskLists', '')
  list.innerHTML = '';
  var p = document.getElementsByTagName('p')[0];
  p.style.display = 'block';
  if (p.style.display = 'block') {
    window.alert('To-Do List successfully CLEARED!');
  }
})


function addTask() { 

    var br = document.createElement('br');
    var p = document.getElementsByTagName('p')[0];
    p.style.display = 'none';
    var task = document.getElementById('tasks');
    //list.appendChild(task.value + '\n');
    var test = document.getElementById('test');
    //test.appendChild(br.cloneNode());
    test.append('\n • ' + task.value);
    test.appendChild(br.cloneNode());


    let form = document.getElementById('form');
    form.style.display = 'none';
    task.value = '';


};


function addAnother() {

   let form = document.getElementById('form');
   form.style.display = 'block';
   
}