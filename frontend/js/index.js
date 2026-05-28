
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    // Default Credentials
    const defaultEmail = "admin@greenvalley.com";
    const defaultPassword = "admin@greenvalley";

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Empty Fields Validation
        if(email === "" || password === ""){
            alert("Please fill all fields");
            return;
        }

        // Credential Validation
        if(email === defaultEmail && password === defaultPassword){

            alert("Login Successful");

            // Redirect to Dashboard
            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

});
