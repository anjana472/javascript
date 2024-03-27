function fetchdata () {

    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            let cart={id:1,product:"shoe",price:3000}
            resolve(cart)
        },2000);
    })
}
let p=fetchdata()
p.then((result) => {
    console.log(result);
    return fetchdata(result);
})
.then((result)=> {
    console.log(result);
    return result;
});

