const p = new Promise(
    (resolve, reject) =>
    {
        if(true)
        {
            resolve("Hiếu");
        }
    });
p.then(function(data){
    setTimeout(() => {
        console.log(data);
        console.log("Vân");
    },3000);
});
