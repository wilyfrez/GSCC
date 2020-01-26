//Validate Login
document.getElementById('login_form').addEventListener('submit', validForm);

function validForm(e) {
    var emailAddress = document.getElementById('user_email').value;
    console.log(emailAddress);
    e.preventDefaultm
}