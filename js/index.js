// fully load the html page
document.addEventListener("DOMContentLoaded", function () {

    // store the form by id, into the created constant variable
    const loginForm = document.getElementById("loginForm");

    // add event listener
    loginForm.addEventListener("submit", function (e) {

        // stop submitting form empty
        e.preventDefault();

        // get the input value we entered and save to the constant variable
        const username = document.getElementById("Username").value.trim();

        // get the input value we entered and save to the constant variable
        const password = document.getElementById("Password").value.trim();

        // fetch users.json to get user data
        fetch("logindetails.json")
            .then(response => response.json())
            .then(users => {
                // check username and password match in JSON data
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    // if both correct log to home.html
                    window.location.href = "home.html";
                } else {
                    // if false give an error message
                    alert("Invalid username or password.");
                }
            })
            .catch(() => {
                alert("Failed to load user data.");
            });
    });
});
