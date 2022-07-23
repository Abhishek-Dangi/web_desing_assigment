function input()
{
eml = document.getElementById('email');
pass = document.getElementById('password');

err1 = document.getElementById('err1');
err2 = document.getElementById('err2'); 
}
function dct() 
{
var vemail = eml.value;
var vpass = pass.value;

if(vemail.length == 0)
{
err1.innerHTML = "*plz enter email";
err1.style.color = "red";
}
else if(vemail.search(/[@]/)==-1)
{
    err1.innerHTML ="*enter @ ";
    err1.style.color = "blue";
}
else{
err1.innerHTML = "";
}
if(vpass.length==0)
{
    err2.innerHTML = "*plz enter password";
    err2.style.color = "red";
}
else if(vpass.search(/[0-9]/)==-1)
{
    err2.innerHTML = "*plz enter numeric ";
    err2.style.color = "red";
}
else if(vpass.search(/[@]/)==-1)
{
    err2.innerHTML = "*plz enter @ ";
    err2.style.color = "blue";
}
else if(vpass.search(/[A-Z]/)==-1)
{
    err2.innerHTML = "*plz enter upper case ";
    err2.style.color = "red";
}
else{
    err2.innerHTML="";
}

}  