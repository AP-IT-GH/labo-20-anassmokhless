//oefening 1
const multiply = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 5000);
    });
};

const runMultiplication = async () => {
    try {
        const result1 = await multiply(2, 5);
        console.log(result1); // 10

        const result2 = await multiply(result1, 2);
        console.log(result2); // 20

        const result3 = await multiply(result2, 2);
        console.log(result3); // 40

        const result4 = await multiply(result3, 2);
        console.log(result4); // 80

        const result5 = await multiply(result4, 2);
        console.log(result5); // 160
    } catch (error) {
        console.log(new Error(`Er is een fout opgetreden ${error}`));
    }
};

runMultiplication();

// oefening 2

const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        
        if (permission === "granted") {
            console.log("Permission granted");
        } else {
            console.log("Permission denied");
        }
    } catch (error) {
        console.log("Error requesting permission:", error);
    }
};

requestNotificationPermission();





