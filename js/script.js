function init() {
  var button = document.getElementById("submit_button");
  button.addEventListener("click", function buttonPress() {
      var name = document.getElementById("name").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      if (name && lastName && email) {
          alert("We will notify you when your iPhone ships");
      } else {
          alert("Please fill out the form");
      }
  })
  window.addEventListener('load', init);
}