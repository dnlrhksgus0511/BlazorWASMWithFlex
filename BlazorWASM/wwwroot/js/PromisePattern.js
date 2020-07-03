//function WithPromise(promiseHandler) {
//    return new Promise((resolve, reject) => {
//        console.log('Initial');
//        resolve();
//    }).then((val) => {
//        sleep(10000);
//        return { "key": "dddd" };
//    });
//}

async function WithAsync() {
    await new Promise((resolve, reject) => {
        //sleep(10000);
        resolve();
    })
    return { "key": "dddd" };
}

async function CallPromise(promiseHandler) {
    const res = await WithAsync();
    promiseHandler.invokeMethodAsync('SetResult', JSON.stringify(res));
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}