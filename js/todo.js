// declaring the variable in specific position sothat it has used immediately after the declaration.
var add = document.getElementById("add");

// when add button is clicked
add.addEventListener("click", function () { console.log("hey");
  var itemValue = document.getElementById("item").value;
  if (itemValue) { // because empty string is always false and whenever there is value the string is true

    addItems(itemValue);
    document.getElementById("item").value = "";
  }
});

// when enter button is pressed
item.addEventListener("keypress", function (e) {
  var itemValue = document.getElementById("item").value;
  var pressedKey = e.which || e.keyCode || e.code;
  if (itemValue && pressedKey == 13) {
    addItems(itemValue);
    document.getElementById("item").value = "";
  }
});

function addItems(itemValue) {

  var createCheckIcon = document.createElement("i");
  createCheckIcon.classList.add("far", "fa-check-circle");
  var createCheckSpan = document.createElement("span");
  createCheckSpan.classList.add("check");
  createCheckSpan.appendChild(createCheckIcon);

  var createRemoveIcon = document.createElement("i");
  createRemoveIcon.classList.add("fa", "fa-trash");
  var createRemoveSpan = document.createElement("span");
  createRemoveSpan.appendChild(createRemoveIcon);

  var createDiv = document.createElement("div");
  createDiv.classList.add("divForSpan");
  createDiv.appendChild(createRemoveSpan);
  createDiv.appendChild(createCheckSpan);

  var li = document.createElement("li");
  li.innerText = itemValue;
  li.appendChild(createDiv);

  var input = document.createElement("input");
  input.classList.add("color");
  input.setAttribute("type", "color");
  input.setAttribute("value", "#42a7f4");
  li.appendChild(input);

  var ul = document.getElementById("todo");
  ul.insertBefore(li, ul.firstChild);

  // delete todo list when trash icon is clicked
  createRemoveIcon.addEventListener("click", function () {
    removeList(this);
  });

  //  complete or redo the todo List when check icon is clicked
  createCheckIcon.addEventListener("click", function () {
    checkUncheckItems(this);
    todoAndCompletedItems(this);
  });

  // change the background of list when color input is clicked
  input.addEventListener("input", function () {
    changeBackgroundColor(this);
  });
}


// change the background of list when color input is clicked
var color = document.querySelectorAll(".color");

for (var i = 0; i < color.length; i++) {
  if (color) {
    color[i].addEventListener("input", function () {
      changeBackgroundColor(this);
    });
  }
}

// delete todo list when trash icon is clicked
var trash = document.querySelectorAll(".fa-trash");
for (var i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    removeList(this);
  });
}

//  complete or redo the todo List when check icon is clicked
var icon = document.querySelectorAll(".fa-check-circle");
for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    checkUncheckItems(this);
    todoAndCompletedItems(this);
  });
}

//================================================================= 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//================================================================= 

//functions 

// delete todo list when trash icon is clicked - function
function removeList(list) {
  var item = list.parentNode.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

// complete or redo the todo List when check icon is clicked - function
// track check icon and change them when clicked - function
function checkUncheckItems(icon) {
  if (icon.classList.contains('far', 'fa-check-circle')) {
    icon.classList.remove('far', 'fa-check-circle');
    icon.classList.add('fa', 'fa-check-circle');
  } else {
    icon.classList.remove('fa', 'fa-check-circle');
    icon.classList.add('far', 'fa-check-circle');
  }
}

// complete or redo the todo List when check icon is clicked - function
// insert list to todo or completed list when icon is clicked - function
function todoAndCompletedItems(item) {
  var item = item.parentNode.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var todo = document.getElementById("todo");
  var completed = document.getElementById("completed");

  // if condition match select completed otherwise select todo - function
  var target = (id === "todo") ? completed : todo;
  parent.removeChild(item);
  target.insertBefore(item, target.firstChild);
}

// change the background of list when color input is clicked - function
function changeBackgroundColor(color) {
  var li = color.parentNode;
  li.style.background = color.value;
  color.value == ("#ffffff") ? (li.style.color = "#000") : (li.style.color = "#fff");
}







