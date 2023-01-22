document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var firstname = document.querySelector("#firstname").value;
    var lastname = document.querySelector("#lastname").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var confirmpassword = document.querySelector("#confirm").value;
    var mobile = document.querySelector("#mobile").value;

    // validate firstname, lastname, email, password, confirmpassword and mobile number
    if(firstname === "" || lastname === "" || email === "" || password === "" || confirmpassword === "" || mobile === ""){
        alert("Please fill all the fields!");
        return;
    }
    // check if password and confirmpassword match
    if(password !== confirmpassword){
        alert("Password and confirm password does not match!");
        return;
    }
    // check for valid email
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert("Invalid Email");
        return;
    }
    // check for valid mobile number
    if(!mobile.match(/^\d{10}$/)){
        alert("Invalid Mobile Number");
        return;
    }
    alert("Registration Successful!");
    //redirect to index.html
    window.location.href = "index.html";
});
