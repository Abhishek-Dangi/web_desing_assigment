function init() {
    nm = document.getElementById('name');
    username = document.getElementById('username');
    password = document.getElementById('password');


    err1 = document.getElementById('err1');
    err2 = document.getElementById('err2');
    err3 = document.getElementById('err3');

}

function demo() {
    var name = nm.value;
    var userna = username.value;
    var pass = password.value;

    if (name.length == 0) {
        err1.innerHTML = "please enter name ";
        err1.style.color = 'red';
    }
    else {
        err1.innerHTML = "";
    }

    if (userna.length == 0) {
        err2.innerHTML = "please enter usrname ";
        err2.style.color = 'red';
    }
    else {
        err1.innerHTML = "";
    }

    if (pass.length == 0) {
        err3.innerHTML = "please enter pass ";
        err3.style.color = 'red';
    }
    else {
        err1.innerHTML = "";
    }
}

