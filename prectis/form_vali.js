

function init() {
    nm = document.getElementById('name');
    unm = document.getElementById('username');
    pass = document.getElementById('password');
    cpass = document.getElementById('cpassword');
    eml = document.getElementById('email');
    mobile = document.getElementById('mob')

    err1 = document.getElementById('err1');
    err2 = document.getElementById('err2');
    err3 = document.getElementById('err3');
    err4 = document.getElementById('err4');
    err5 = document.getElementById('err5');

}
function valid() {
    var name = nm.value;
    var username = unm.value;
    var password = pass.value;
    var cpassword = cpass.value;
    var email = eml.value;
    var mobile = mob.value;

    if (name.length == 0) {
        err1.innerHTML = "enter name";
        err1.style.color = "red";

    }
    else {
        err1.innerHTMl = "";
    }
    if (username.length == 0) {
        err2.innerHTML = "enter username";
        err2.style.color = "blue";

    }
    else {
        err2.innerHTMl = "";
    }
    if (password.length == 0) {
        err3.innerHTML = "enter password";
        err3.style.color = "red";

    }
    if (password.search(/[a-z]/) == -1) {
        err4.innerHTML = "enter alphabel";
        err4.style.color = "red";
    }
    else {
        err3.innerHTMl = "";
    } if (cpassword.length == 0) {
        err4.innerHTML = "enter cpassword";
        err4.style.color = "red";

    }
    else {
        err4.innerHTMl = "";
    }
    if (email.length == 0) {
        err5.innerHTML = "enter email";
        err5.style.color = "red";

    }
    else if (email.search(/[@]/) == -1) {
        err5.innerHTML = "enter @";
        err5.style.color = "red";
    }
    else {
        err5.innerHTMl = "";
    }
    if (mobile.length == 0) {
        err6.innerHTML = "enter email";
        err6.style.color = "red";

    }
    else {
        err6.innerHTMl = "";
    }

}
