function age(){
    var date=new Date();
    
    console.log(date);
    var bdate=document.getElementById("bdate").value;
    var bdatee=new Date(bdate);

    var year=date.getFullYear();
    
    var birthyear=bdatee.getFullYear();
   
    var personage=year-birthyear;
    console.log(personage);
    
}
