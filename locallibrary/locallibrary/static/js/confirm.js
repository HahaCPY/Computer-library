
var visible=document.getElementById("psw_visible");  
var invisible=document.getElementById("psw_invisible");
var inputVisible = document.getElementById("input_visible");  
var inputInVisible = document.getElementById("input_invisible");

function showPsw(){  
var val = inputInVisible.value;
    inputVisible.value = val;  
    invisible.style.display = "none";    
    visible.style.display = "";    
    }  

function hidePsw(){
var val=inputVisible.value;   
    inputInVisible.value = val;   
    invisible.style.display = "";    
    visible.style.display = "none";    
    }  
var demoImg = document.getElementById("demo_img");  
var demoInput = document.getElementById("demo_input");  

function hideShowPsw(){  
if (demoInput.type == "password") {  
    demoInput.type = "text";  
    demo_img.src = "./image/openeye.png";}
else {  demoInput.type = "password";  
        demo_img.src = "./image/closeeye.png";  
    }  
} 
var visible2=document.getElementById("psw_visible2");  
var invisible2=document.getElementById("psw_invisible2");
var inputVisible2 = document.getElementById("input_visible2");  
var inputInVisible2 = document.getElementById("input_invisible2");

function showPsw2(){  
var val = inputInVisible2.value;
    inputVisible2.value = val;  
    invisible2.style.display = "none";    
    visible2.style.display = "";    
    }  

function hidePsw2(){
var val=inputVisible2.value;   
    inputInVisible2.value = val;   
    invisible2.style.display = "";    
    visible2.style.display = "none";    
    }  
var demoImg = document.getElementById("demo_img");  
var demoInput = document.getElementById("demo_input");  

function hideShowPsw2(){  
if (demoInput.type == "password") {  
    demoInput.type = "text";  
    demo_img.src = "./image/openeye2.png";}
else {  demoInput.type = "password";  
        demo_img.src = "./image/closeeye2.png";  
    }  
} 