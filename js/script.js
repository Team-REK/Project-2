function init() {
    var button = document.getElementById("button");
    button.addEventListener("click", function buttonPress() {
        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var lastName = document.getElementById("lastName").value;
        if (email && name && lastName) {
            alert("We look forward to meeting you!");
        } else {
            alert("Please fill out the form");
        }
    })
    window.addEventListener('load', init);
}