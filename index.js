// alert("Hello from outer js file");
var addButton = $("#add-button");
var clearCompletedButton = $("#clear-completed-button");
var emptyButton = $("#empty-button");
var saveButton = $("#save-button");

saveButton.click(saveList);
emptyButton.click(emptyList);
clearCompletedButton.click(clearCompeletedToDoItems);
addButton.click(addToDoItem);

function saveList() {
  console.log("save button is clicked");
}

function emptyList() {
  console.log("emptyList button is clicked");
}

function clearCompeletedToDoItems(params) {
  console.log("clear-completed button is clicked");
}

function addToDoItem() {
  console.log("Add ToDo List is added");
}
