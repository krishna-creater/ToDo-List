// alert("Hello from outer js file");
var addButton = $("#add-button");
var clearCompletedButton = $("#clear-completed-button");
var emptyButton = $("#empty-button");
var toDoList = $("#todo-list");

emptyButton.click(emptyList);
clearCompletedButton.click(clearCompeletedToDoItems);
addButton.click(addToDoItem);

function emptyList() {
  //   console.log("emptyList button is clicked");
  $("ol").empty();
  $("#todo-entry-box").val("");
}

function clearCompeletedToDoItems() {
  //   console.log("clear-completed button is clicked");
  $(".completed").remove();
  $("#todo-entry-box").val("");
}

$("body").keypress(function (event) {
  if (event.keyCode === 13) {
    addToDoItem();
  }
});
function addToDoItem() {
  //   console.log("Add ToDo List is added");
  var itemText = $("#todo-entry-box").val();
  if (itemText == "") {
    alert("list can't be empty");
  } else {
    $("#todo-entry-box").val("");
    $("#todo-list").append("<li>" + itemText + "</li>");
  }
}

$("ol").on("dblclick", "li", function () {
  if ($(this).hasClass("completed")) {
    $(this).removeClass("completed");
  } else {
    $(this).addClass("completed");
  }
});
