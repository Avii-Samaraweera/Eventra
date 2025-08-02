// fully load the html page
document.addEventListener("DOMContentLoaded", function () {
    
    //quary selector selects tags
    const form = document.querySelector("form");

    //quary selector for all fonts tag to show errors
    const fontTags = document.querySelectorAll("font");

    // Inputs
    const firstNameInput = document.getElementById("Fname");
    const lastNameInput = document.getElementById("Lname");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("Username");
    const passwordInput = document.getElementById("Password");
    const rePasswordInput = document.getElementById("Re-Enter_Password");

    form.addEventListener("submit", function (e) {

        //stop submit form 
        e.preventDefault();
        fontTags.forEach(tag => tag.textContent = "");

        // Trim values
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const rePassword = rePasswordInput.value.trim();

        let isValid = true;

        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^\S+@\S+\.\S+$/;
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/;

        // Validate First Name
        if (firstName.length < 2) {
            fontTags[0].textContent = "First name must be at least 2 characters";
            firstNameInput.classList.add("error");
            isValid = false;
        } else if (!nameRegex.test(firstName)) {
            fontTags[0].textContent = "First name must contain only letters";
            firstNameInput.classList.add("error");
            isValid = false;
        } else {
            firstNameInput.classList.remove("error");
        }

        // Validate Last Name
        if (lastName.length < 2) {
            fontTags[1].textContent = "Last name must be at least 2 characters";
            lastNameInput.classList.add("error");
            isValid = false;
        } else if (!nameRegex.test(lastName)) {
            fontTags[1].textContent = "Last name must contain only letters";
            lastNameInput.classList.add("error");
            isValid = false;
        } else {
            lastNameInput.classList.remove("error");
        }

        // Validate Email
        if (!emailRegex.test(email)) {
            fontTags[2].textContent = "Enter a valid email address";
            emailInput.classList.add("error");
            isValid = false;
        } else {
            emailInput.classList.remove("error");
        }

        // Validate Username
        if (!usernameRegex.test(username)) {
            fontTags[3].textContent = "Username must be 3-15 characters with letters, numbers, or _";
            usernameInput.classList.add("error");
            isValid = false;
        } else {
            usernameInput.classList.remove("error");
        }

        // Validate Password
        if (!passwordRegex.test(password)) {
            fontTags[4].textContent = "Password must have 6+ characters with letters, numbers & symbols";
            passwordInput.classList.add("error");
            isValid = false;
        } else {
            passwordInput.classList.remove("error");
        }

        // Validate Re-enter Password
        if (rePassword === "") {
            fontTags[5].textContent = "Please re-enter your password";
            rePasswordInput.classList.add("error");
            isValid = false;
        } else if (password !== rePassword) {
            fontTags[5].textContent = "Passwords do not match";
            rePasswordInput.classList.add("error");
            isValid = false;
        } else {
            rePasswordInput.classList.remove("error");
        }

        if (isValid) {
            const data = { firstName, lastName, email, username, password }; 
            console.log("✅ Validated Data:", data);
            form.submit();
            // proceed with form submission or AJAX here
        }
    });
});

// Show scroll button when scrolled down
window.onscroll = function () {
    const btn = document.getElementById("scrollUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block"; // when some content not visible scroll button show
    } else {
        btn.style.display = "none"; // when content is visible scroll button not shows
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //when click go to top of page
}


