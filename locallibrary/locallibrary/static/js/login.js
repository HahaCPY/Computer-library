 function login() {
    var username = document.getElementById("username");
    var pass = document.getElementById("input_invisible");
    var pas = document.getElementById("input_visible");
    if (username.value == "") {
        alert("Please enter username");} 
    else if (pass.value  == "" && pas.value == "") {
        alert("Please enter password");}
    else if(username.value == "admin" && pass.value == "123456"){
    window.location.href="../mainpage/mainpage.html";}
    else {
        alert("Please enter correct username and password")}
    } 
 
