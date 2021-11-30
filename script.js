var addTaskBtn = document.getElementById("add-btn");
var ipTxt = document.getElementById("ip-txt");
var todoList = document.getElementById("todo-list");
var div1 = document.createElement("div");
var listItem = document.createElement("li");
var checkBox = document.createElement("input");
var checkBox1 = document.createElement("input");

var checkBoxClick = function () {
  var listItem = this.parentNode;
  var checkBox = listItem.querySelector("input[type=checkbox]");
  var editButton = listItem.querySelector(".edit");
  var lable = listItem.querySelector("lable");

lable.remove();
  checkBox.remove();
  editButton.remove();
};

var editClick = function () {
  var listItem = this.parentNode;
  listItem.querySelector("textarea").disabled = false;
};

var delClick = function () {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

var addTask = function () {
  if(!ipTxt.value == ""){
  var div1 = document.createElement("div");
  var listItem = document.createElement("li");
  var taskTxt = document.createElement("textarea");

  taskTxt.value = ipTxt.value;
  taskTxt.className = "task-txt";
  taskTxt.disabled = true;

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  var editBtn = document.createElement("button");
  var lable = document.createElement("lable");
  lable.innerText="Check If you completed Task"

  editBtn.innerText = "Edit";
  editBtn.className = "edit";

  checkBox.type;
  listItem.appendChild(taskTxt);
  listItem.appendChild(checkBox);
  listItem.appendChild(lable)
  listItem.appendChild(deleteBtn);
  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);

  todoList.appendChild(listItem);
  ipTxt.value = "";
  bindCheckBox(listItem, checkBoxClick);
  bindEditButton(listItem, editClick);
  bindDelButton(listItem, delClick);
  }
  else{
      window.alert("Task Cant be null")
  }
};

var bindCheckBox = function (listItem, checkBoxClick) {

  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;
};
var bindEditButton = function (listItem, editClick) {

  var editButton = listItem.querySelector(".edit");
  editButton.onclick = editClick;
};

var bindDelButton = function (listItem, delClick) {

  var editButton = listItem.querySelector(".delete");
  editButton.onclick = delClick;
};
