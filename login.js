document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var logArr = JSON.parse(localStorage.getItem("allUsers")) || [];
    var userEmail = document.querySelector("#email").value;
    for(let i = 0; i < logArr.length; i++) {
        var email = logArr[i].email;
        if(email === userEmail) {
            window.location.href = "index.html";
            return;
        }
    }
    alert("Your Account is NOT Register!!");
});
