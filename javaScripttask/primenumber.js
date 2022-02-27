function prime(){
    var flag=1;
    var picknum=document.getElementById("readnum").value;
    if(picknum==0||picknum==1){
        console.log("is not prime");
    }
    else{
        for(var i=2;i<picknum;i++){
            if(picknum % i ==0){
                console.log("is not prime");
                flag=0;
                break;
            }
        }
        if(flag==1){
            console.log("is prime");        }
    }

}