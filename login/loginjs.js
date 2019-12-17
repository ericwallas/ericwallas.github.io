var valid_id = "username";
var valid_pw = "123";

var id = document.getElementById("login");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");

submit.onclick = function() {
  if(valid_id == id.value)
    if(valid_pw == pw.value)
      window.location.href = "../wonderwebsite/index.html";
}
