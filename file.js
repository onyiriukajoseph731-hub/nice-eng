const data = {
       porkygreat02: "porky123"
};

function login() { 
const username = document.getElementById("username").value;
const password = document.getElementById( "password" ).value;

if( data[ username]===password){ 
    document.getElementById("message").innerHTML=window.location.href="nice.html";
}
else{}
document.getElementById("message").innerHTML= "invalid username and password.";

}