let donuts = 5;

function checkDonutStock(){
    return new Promise((resolve, reject) => {
        if(donuts >=5){
            setTimeout(() => {
            resolve("Enough donuts for Homer!");
        }, 2000);
        }
        else{
            reject("Oh no not enough donuts!");
        }
    });
}

checkDonutStock()
.then((result)=> {
    console.log(result);
})
.catch((error) =>{
    console.log(error);
})