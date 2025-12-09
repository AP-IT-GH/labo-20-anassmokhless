function getLisabook(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Got lisa's book");
        }, 1200);
    })
}

function getMaggieBottle(){
    return new Promise((resolve) => {
        resolve("Got Maggie's bottle");
    })
}

function getMargeGroceries(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Got Marge's groceries");
        }, 1800);
    })
}

//met promise.all
Promise.all([getLisabook(), getMaggieBottle(), getMargeGroceries()])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    })

//met gewone promise chaining
getLisabook()
    .then((result) => {
        console.log(result);
        return getMaggieBottle();
    })
    .then((result) => {
        console.log(result);
        return getMargeGroceries();
    })
    .then((result) =>{
        console.log(result);
    })