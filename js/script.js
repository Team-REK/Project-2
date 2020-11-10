function init() {
  var button = document.getElementById("button");
  button.addEventListener("click", function buttonPress() {
      var name = document.getElementById("name").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      if (name && lastName && email) {
          alert("We'll see you soon!");
      } else {
          alert("Please fill out the form");
      }
  })
}
window.addEventListener('load', init);
