function check() {
    if(check_usr()&&check_pwd()&&check_same()&&check_qq())
    return true;
    else
    return false;

function check_usr() {
    var x;
    x=document.forms["info"]["username"].value;
    var pat=/^[a-zA-Z]\w{5,15}$/;  //匹配正則表示式
    if(x.search(pat)==-1) {
        var txt=document.getElementById("username").innerHTML;
        txt=txt.replace(txt,"使用者名稱格式錯誤！");
        document.getElementById("username").innerHTML=txt;
        return false; }
    else {
        var txt=document.getElementById("username").innerHTML;
        txt=txt.replace(txt," ");
        document.getElementById("username").innerHTML=txt;
        return true; } }

function check_pwd() {
    var x;
    x=document.forms["info"]["password"].value;
    var pat=/^\w{6,16}$/;
    if(x.search(pat)==-1) {
        var txt=document.getElementById("password").innerHTML;
        txt=txt.replace(txt,"密碼格式不正確！");
        document.getElementById("password").innerHTML=txt;
        return false; }
    else {
        var txt=document.getElementById("password").innerHTML;
        var tmp=txt.replace(txt," ");
        document.getElementById("password").innerHTML=tmp;
        return true; } }

function check_same()
{
    var x=document.forms["info"]["password"].value;
    var y=document.forms["info"]["password_again"].value;
    //從表中獲取input資訊
    //document.forms["表單名"]["表單中一項的名"].value;
    if(x!=y)
    {
        var txt=document.getElementById("not_same").innerHTML;
        txt=txt.replace(txt,"兩次輸入不一致！");
        document.getElementById("not_same").innerHTML=txt;
        return false;
    }
    else
    {
        var txt=document.getElementById("not_same").innerHTML;
        txt=txt.replace(txt," ");
        document.getElementById("not_same").innerHTML=txt;
        return true;
    }
}
function check_gmail()
{
    var x;
    x=document.forms["info"]["gmail"].value;
    pat=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if(x.search(pat)==-1)
    {
        var txt=document.getElementById("gmail").innerHTML;
        txt=txt.replace(txt,"Please enter password gmail！");
        document.getElementById("gmail").innerHTML=txt;
        return false;
    }
    else
    {
        var txt=document.getElementById("gmail").innerHTML;
        txt=txt.replace(txt," ");
        document.getElementById("gmail").innerHTML=txt;
        return true;
    }
}
if(check_usr()&&check_pwd()&&check_same()&&check_gmail())
return true;
else
return false;
}
function check_usr()
{
var x;
x=document.forms["info"]["username"].value;
var pat=/^[a-zA-Z]\w{5,15}$/;
//正則表示式
if(x.search(pat)==-1)
{
/*
在字串中呼叫search方法應用正則表示式，返回第一個匹配到的位置，
如果沒匹配到則返回-1
*/
    var txt=document.getElementById("username").innerHTML;
    /*
    獲取id="usr"標籤中的內容，變數名為txt
    */
    txt=txt.replace(txt,"使用者名稱格式錯誤！");
    document.getElementById("usr").innerHTML=txt;
    /*標籤id="usr"中的內容變為新的txt*/
    return false;
}
else
{
    var txt=document.getElementById("usr").innerHTML;
    txt=txt.replace(txt," ");
    document.getElementById("usr").innerHTML=txt;
    return true;
}
}