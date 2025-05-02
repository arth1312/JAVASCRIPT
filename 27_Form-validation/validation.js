const form = document.querySelector('form');

function clearError(){
    let errorList = document.querySelectorAll('.error');
    errorList.forEach(item => item.innerHTML = "")
}

function setError(id, message){
    document.getElementById(id).innerHTML = message
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    clearError();
    let a = true;
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(fname == ""){
        setError("fnameErr", '* First name is required!');
        a = false;
    }

    if(lname == ""){
        setError("lnameErr", '* last name is required!');
        a = false;
    }
    else if(lname.length < 5){
        setError("lnameErr", 'Last name is minimum length is 5');
        a = false;
    }

    if(email == ""){
        setError("emailErr", '* Email is required!');
        a = false;
    }

    if(password == ""){
        setError("passErr", '* Password is required!');
        a = false;
    }
    else if(password.length < 5){
        setError("passErr", 'Password is minimum length is 5');
        a = false;
    }

    if(a){
        console.log("Your form is submitted");
        form.reset();
    }
});