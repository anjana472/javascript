products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}];

    // console.log(products);

    // products.forEach(product => console.log(product.pName));

    // products.forEach(product => {if(product.display==='Icd')
    //     {
    //         console.log(product);
    //     }
    // });
    
    // products.forEach(product => {if(product.price<50000)
    //     {
    //         console.log(product.pName);
    //     }
    // });

    // products.forEach(product => { if(product.band === '5g')
    //     {
    //         console.log(product.pName);
    //     }
    // });

    // let costlyMobile = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    // console.log(costlyMobile);

    let lowCostMobile = products.reduce((prev, current) => (prev.price < current.price) ? prev : current);
    console.log(lowCostMobile);




    

