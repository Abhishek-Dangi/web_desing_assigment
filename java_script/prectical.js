function init()
{
    nm = document.getElementById('name');
    uname = document.getElementById('username');
    pass = document.getElementById('pass');
    cpass = document.getElementById('cpass');
    mob = document.getElementById('mobile');

    err1 = document.getElementById('err1')
    err2 = document.getElementById('err2')
    err3 = document.getElementById('err3')
    err4 = document.getElementById('err4')
    err5 = document.getElementById('err5')
}

function valid()
{
    var name=nm.value;
    var username=uname.value;
    var password=pass.value;
    var cpassword=cpass.value;
    var mobile=mob.value;

    if(name.length==0)
{
    err1.innerHTML="*plz enter name";
    err1.style.color="red";
}
else{
    err1.innerHTML="";
}
if(username.length==0)
{
    err2.innerHTML="*plz enter name";
    err2.style.color="red";
}
else{
    err2.innerHTML="";
}
if(password.length==0)
{
    err3.innerHTML="*plz enter name";
    err3.style.color="red";
}
else{
    err3.innerHTML="";
}
if(cpassword.length==0)
{
    err4.innerHTML="*plz enter name";
    err4.style.color="red";
}
else{
    err4.innerHTML="";
}
if(mobilet.length==0)
{
    err5.innerHTML="*plz enter name";
    err5.style.color="red";
}
else{
    err5.innerHTML="";
}
}