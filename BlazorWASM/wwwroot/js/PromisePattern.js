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
        console.log('Initial');
        sleep(10000);
        resolve();
    })
    return { "key": "dddd" };
}

async function CallPromise(promiseHandler) {
    const res = await WithAsync();
    //결과를 C# 단에 있는 SetResult를 호출
    promiseHandler.invokeMethodAsync('SetResult', res);
    //promiseHandler.invokeMethodAsync('SetResult', JSON.stringify(res));
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}