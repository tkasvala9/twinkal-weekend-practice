fetch('https://jsonplaceholder.typicode.com/users')
.then((apidata)=>{
    console.log(apidata);
    return apidata.json();
})
.then((actualdata)=>{
    console.log(actualdata);
})
.catch(error =>{
    console.log(error);
})