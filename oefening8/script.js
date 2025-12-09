function getKrustyBurgerOrder(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
           const order = "Krusty Burger with extra cheese";
           resolve(order);
        }, 1000)
    })
}

function prepareOrder(order){
    return new Promise((resolve) => {
        setTimeout(() => {
            const prepared = `Prepared: ${order}`;
            resolve(prepared);
        }, 1500);
    })
}

function deliverOrder(preparedOrder){
    return new Promise((resolve) => {
        setTimeout(() => {
            const delivered = `Delivered: ${preparedOrder}`;
            resolve(delivered);
        }, 1000);
    })
}

getKrustyBurgerOrder()
.then((order) => {
    console.log(order);
    return prepareOrder(order);
})
.then((preparedOrder) => {
    console.log(preparedOrder);
    return deliverOrder(preparedOrder);
})
.catch((error) => {
    console.log(error);
})