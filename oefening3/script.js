const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 5000);
    });
};

multiply(2, 5)
    .then((result) => {
        console.log(result); // 10
        return multiply(result, 2); // Return the promise
    })
    .then((result) => {
        console.log(result); // 20
        return multiply(result, 2);
    })
    .then((result) => {
        console.log(result); // 20
        return multiply(result, 2);
    })
    .then((result) => {
        console.log(result); // 20
        return multiply(result, 2);
    })
    .then((result) => {
        console.log(result); // 20
    })
    .catch((error) => {
        console.log(`Er is een fout opgetreden: ${error}`);
    });