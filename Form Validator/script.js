const form = document.getElementById("form");

const username = document.getElementById("username");
const gmail = document.getElementById("gmail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Cheak gmail validation
function isValidgmail(input) {
    const emailPattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    
    if(input.value === '') {
        showError(input, `${getFieldName(input.id)} is required.`);
    } else if(emailPattern.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, `Enter valid gmail.`);
    }
    return emailPattern.test(String(input).toLowerCase());
}

// function cheakRequired(inputArr) {
//     inputArr.forEach((input)  => {
//         if(input.value.trim() === '') {
//             showError(input, `${getFieldName(input.id)} is required.`);
//         } else {
//             showSuccess(input);
//         }
//     });
// }

function cheakLength(input, min, max) {
    if (input.value === '') {
        showError(input, `${getFieldName(input.id)} is required.`);
    } else if(input.value.length < min) {
        showError(input, `${getFieldName(input.id)} must contain at least ${min} charecters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input.id)} must contain less than ${max} charecters`);
    } else {
        showSuccess(input);
    }
}

function cheakPasswordsMatch(input, input2) {
    if(input2.value === '') {
        showError(input2, `${getFieldName(input2.id)} is required.`);
    } else if(input.value !== input2.value) {
        showError(input2, `Enter same password`);
    } else {
        showSuccess(input2);
    }
}

function getFieldName(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // cheakRequired([username, gmail, password, password2]);

    cheakLength(username, 3, 15);
    cheakLength(password, 6, 25);
    isValidgmail(gmail);
    
    cheakPasswordsMatch(password, password2);


    // if(username.value === '') {
    //     showError(username, "Username is required.");
    // } else {
    //     showSuccess(username);
    // }

    // if(gmail.value === '') {
    //     showError(gmail, "Gmail is required.");
    // } else if(!isValidgmail(gmail.value)) {
    //     showError(gmail, "Enter valid gmail")
    // } else {
    //     showSuccess(gmail);
    // }

    // if(password.value === '') {
    //     showError(password, "Password is required.");
    // } else {
    //     showSuccess(password);
    // }

    // if(password2.value === '') {
    //     showError(password2, "Confirm password is required.");
    // } else {
    //     showSuccess(password2);
    // }
    
})