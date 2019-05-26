var form = document.getElementById("form");
var container = document.getElementsByClassName("inputs")[0];
var link = document.querySelector(".link a");
var add = document.getElementById("add");
var href = location.href.replace(/[?#].*$/g, "");

form.addEventListener("submit", function($event) {
  $event.preventDefault();
  var list = [];
  var inputs = document.querySelectorAll("input");
  inputs.forEach(function(input) {
    list.push(btoa(input.value));
  });
  link.href = href + "#" + list.join("&");
  link.innerHTML = link.href;
});

add.addEventListener("click", function() {
  var input = document.createElement("input");
  input.placeholder = "Link " + (1 + container.children.length);
  container.appendChild(input);
});