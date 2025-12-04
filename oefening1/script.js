Notification.requestPermission()
.then((permission) => {
    if(permission === "granted"){
        console.log("Permission granted");
    }
    else{
        console.log("Permission denied");
    }
})

console.log("test");


