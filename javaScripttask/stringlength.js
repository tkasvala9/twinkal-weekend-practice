function countlet(){
    var picstring=document.getElementById("string1").value;
    var count=0;
    for(var i=0;i<picstring.length;i++){
        if(picstring.charAt(i)!=" "){
            count++;
        }    
    }
    console.log(count);

}