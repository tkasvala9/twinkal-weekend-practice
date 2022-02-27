var count = 0;
function addcart(){
   
    count++;
    
    console.log(count);
    localStorage.setItem("count",count)
    
}

function cartload(){
    document.getElementById("counter1").innerHTML = localStorage.getItem("count");
}