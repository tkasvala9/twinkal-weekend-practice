function compare(){
    var username="advent";
    var password="advent@123";
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    if(username==uname && password==pwd){
        console.log("login");
    }
    
    
    else{
        console.log("username nd pwd is not match");
    }
       
    
}