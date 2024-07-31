// Ensure that the DOM is fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element by its ID
    const form = document.getElementById("signUpForm");

    // Add an event listener for the form's submit event
    form.addEventListener("submit", (e) => {
        // Prevent the default form submission behavior to avoid page reload
        e.preventDefault();

        if(validateData()){
            // Call the function to handle form submission
            handleFormSubmit();
        }

    });

    // Function to handle the form submission
    function handleFormSubmit() {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Create a FormData object from the form element
        const formData = new FormData(form);
        // Log the key-value pairs of the form data for debugging

        //add data send to the server
        formData.append('signupbtn','submit');
        // for (const [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        // Initialize a POST request to 'signup.php'
        xhr.open("POST", "signup.php");

        // Define the callback function to handle the server's response
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Log the server's response on successful request
                let response = this.responseText;

                if(response == 1){
                    Swal.fire({
                        text: "User Created Successfully!",
                        icon: "success"
                    });

                    form.reset();
                }
            } else {
                // Log an error message if the request failed
                console.log("Request failed with status: " + xhr.status);
            }
        };

        // Send the FormData object to the server
        xhr.send(formData);
    }

    function validateData() {
        //create a validation flag
        let isValid = true;

        //select all elemtns with error class
        const errorElements = document.querySelectorAll(".error");

        //set all error elements value is empty
        errorElements.forEach((el) => el.textContent = '');

        //get the email element
        let emailElem = form.querySelector("input[name='email']");
        //get the password element
        let passwordElem = form.querySelector("input[name='password']");

        // Validate email
        if (!emailElem || emailElem.value.trim() === '') {
            //call the show error function 
            showError("email", "Email is Required");
            isValid = false;
        } else if (!validateEmail(emailElem.value)) {
            showError("email", "Email address is not valid!");
            isValid = false;
        }

        // Validate password
        if (!passwordElem || passwordElem.value.trim() === '') {
            showError("password", "Password is Required");
            isValid = false;
        } else if (passwordElem.value.length < 6) {
            showError("password", "Password must be at least 6 characters long");
            isValid = false;
        }

        return isValid;
    }

    function showError(fieldName, message) {
        const field = form.querySelector(`input[name='${fieldName}']`);
        const errorMessage = field.parentElement.querySelector('.error');

        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
