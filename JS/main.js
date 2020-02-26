

function formSub() {
    const name = document.getElementById("name");
    const email = document.getElementById("mail");
    const msg = document.getElementById("msg");
    alert( "Name: " + name.value + "\nEmail: " + email.value + "\nMessage: " + msg.value);
}

function formClear() {
   alert("Start again");


}



if(submit){
submit.addEventListener("click", formSub, false);
};

if(clear){
clear.addEventListener("click", formClear, false)
event.preventDefault();
};
