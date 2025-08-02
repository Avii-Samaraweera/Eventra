// fully load the html page
document.addEventListener("DOMContentLoaded", function () {


    // store the form by id, into the created constan variabele
    const loginForm = document.getElementById("loginForm");


    //add event listner
    loginForm.addEventListener("submit", function (e) {

        // stop submitting form empty
        e.preventDefault();


        //get the input value we entered and save to the constant variable
        const username = document.getElementById("Username").value;


        //get the input value we entered and save to the constant variable
        const password = document.getElementById("Password").value;

        // check username is equal to input value, check password equal to input value, if both correct log to home.html
        if (username === "avi" && password === "avi123sa") {
            window.location.href = "home.html";
        } else {

            // if false give a error massage
            alert("Invalid username or password.");
        }
    });
});
