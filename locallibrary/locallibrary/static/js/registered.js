function Email(strEmail) {
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)!= -1)
        return true;
    else
        alert("Please enter correct gmail");
        var mail = document.getElementById("mail");
        mail.value = ""; }

function Pwd() {
    var pass = document.getElementById("input_invisible");
    var pas = document.getElementById("input_visible");
    if ( 5 < pas.value.length && pas.value.length < 17 ) {
        return true; }
    else if( 5 < pass.value.length && pass.value.length < 17){
        return true; }
    else
        alert("Password must be between 6 and 16");
        pas.value = "";
        pass.value = ""; }

function registered() {
    var username = document.getElementById("username");
    var pass = document.getElementById("input_invisible");
    var pas = document.getElementById("input_visible");
    var mail = document.getElementById("mail");
    var confirm = document.getElementById("pwcheck");
    if (username.value == "") {
        alert("Please enter username") ;} 
    else if(mail.value == "") {
        alert("Please enter gmail"); }
    else if (pass.value  == "" && pas.value == "") {
        alert("Please enter password"); }
    else if (confirm.value == "") {
        alert("Please enter confirm password"); }
    else if(confirm.value != pass.value && confirm != pas.value) {
        alert("This field is required and must match the password.");
        confirm.value = ""; }
    else {
        alert("registered finish"); 
        window.location.href="../login/login.html";} }
        


 
