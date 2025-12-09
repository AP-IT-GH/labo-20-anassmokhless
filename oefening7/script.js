function getBartHomework(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Math homework");
        }, 2000);
    });
}

function finishHomework(homework){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bart finished: ${homework}`);
        }, 1000);
    });
}

getBartHomework()
.then((homework) => {
    console.log(homework);
    return finishHomework(homework);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})