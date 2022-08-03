function init() {
    nm = document.getElementById('name');
    lname = document.getElementById('lastname');
    email = document.getElementById('email');
    pass = document.getElementById('pass');
    repass = document.getElementById('rpass');

    err1 = document.getElementById("err1");
    err2 = document.getElementById("err2");
    err3 = document.getElementById("err3");
    err4 = document.getElementById("err4");
    err5 = document.getElementById("err5");
}
function valid() {
    var name = nm.value;
    var lastname = lname.value;
    var mail = email.value;
    var password = pass.value;
    var repassword = repass.value;

    if (name.length == 0) {
        err1.innerHTML = "enter your name";
        err1.style.color = 'red';
    }
    else {
        err1.innerHTML = " ";
    }
    if (lastname.length == 0) {
        err2.innerHTML = "enter you last name";
        err2.style.color = 'red';
    }
    else {
        err2 = " ";
    }
    if (mail.length == 0) {
        err3.innerHTML = "enter mail i'd";
        err3.style.color = 'red';
    }
    else if (mail.search(/[@]/) == -1) {
        err3.innerHTML = "enter @";
        err3.style.color = 'red';
    }
    else {
        err3.innerHTML = " ";
    }
    if (password.length == 0) {
        err4.innerHTML = "enter password";
        err4.style.color = 'red';
    }
    else {
        err4.innerHTML = " ";
    }
    if (repassword.length == 0) {
        err5.innerHTML = "enter password";
        err5.style.color = 'red';
    }
    else {
        err5.innerHTML = " ";
    }

}