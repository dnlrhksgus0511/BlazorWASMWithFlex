// when $flex on ready.....
var imgsrc;
window.onFlexLoad = function () {
    console.log('Flex Load Success!!');
    $flex.web.help = function (data) {
        console.log('Received by Native ---- ' + data);
        return Promise.resolve('Thanks Flex!')
    }
    $flex.web.result = function (data) {
        console.log(data)
    }
}


async function Toast(promiseHandler, param) {
    try {
        const result = await $flex.Toast(param[0], param[1]);
        console.log('Return by Native with Toast   : ' + result)
    } catch {
        consoel.log('Toast() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}
async function CameraByDeviceRatio(promiseHandler) {
    const result = await $flex.CameraByDeviceRatio(0.8, true);
    if (result == 'Cancel' || result == null) {
        console.log(result)
    } else {
        console.log(result);
    } 
    promiseHandler.invokeMethodAsync('SetResult', "");
}

async function CameraByRatio(promiseHandler) {
    const result = await $flex.CameraByRatio(0.8);
    if (result == 'Cancel' || result == null) {
        console.log(result)
    } else {
        console.log(result);
    }
    promiseHandler.invokeMethodAsync('SetResult', "");
}


async function PhotoByDeviceRatio(promiseHandler) {
    const result = await $flex.PhotoByDeviceRatio(0.5, true);
    if (result == 'cancel' || result == null) {
        console.log(result)
    } else {
        var imgTag = document.createElement("img")
        imgTag.src = result;
        var imgDiv = document.getElementById('photos');
        imgDiv.appendChild(imgTag)
    }
    promiseHandler.invokeMethodAsync('SetResult', "");
}

async function PhotoByRatio(promiseHandler) {
    const result = await $flex.PhotoByRatio(0.5);
    if (result == null) {
        console.log(result)
    } else {
        var imgTag = document.createElement("img")
        imgTag.src = result;
        var imgDiv = document.getElementById('photos');
        imgDiv.appendChild(imgTag)
    }
    promiseHandler.invokeMethodAsync('SetResult', "");
}

async function MultiPhotoByDeviceRatio(promiseHandler) {
    const result = await $flex.MultiPhotoByDeviceRatio(0.3, true);
    if (result == 'cancel' || result == null) {
        console.log(result)
    } else {
        console.log('Return by Native with MultiplePhotos   : ' + result.length)
        for (var i = 0; i < result.length; i++) {
            var imgTag = document.createElement("img")
            imgTag.src = result[i];
            var imgDiv = document.getElementById('photos');
            imgDiv.appendChild(imgTag)
        }
    }
    promiseHandler.invokeMethodAsync('SetResult', "");
}


async function MultiPhotoByRatio(promiseHandler) {
    const result = await $flex.MultiPhotoByRatio(0.3);
    if (result == 'Cancel' || result == null) {
        console.log(result)
    } else {
        console.log('Return by Native with MultiplePhotos   : ' + result.length)
        for (var i = 0; i < result.length; i++) {
            var imgTag = document.createElement("img")
            imgTag.src = result[i];
            var imgDiv = document.getElementById('photos');
            imgDiv.appendChild(imgTag)
        }
    }
    promiseHandler.invokeMethodAsync('SetResult', "");
}


async function Location(promiseHandler) {
    const result = await $flex.Location();
    console.log('Return by Native with Location  : ' + result['latitude'] + ':' + result['longtitude'])
    promiseHandler.invokeMethodAsync('SetResult', "");
}


async function Dialog(promiseHandler) {
    var btn = {
        'basic': '확인'
        , 'destructive': '삭제'
        , 'cancel': '취소'
    }
    let result = null;
    try {
        result = await $flex.Dialog('testTitle', 'testMessage', btn, false, true);
        console.log('Return by Native with Dialog   : ' + result)
    } catch {
        console.log('Dialog() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', result);
    }
}

async function Authentication(promiseHandler) {
    let result = null;
    try {
        result = await $flex.Authentication();
        console.log('Return by Native with Authentication   : ' + result)
    } catch {
        console.log('Authentication() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function RootingCheck(promiseHandler) {
    try {
        const result = await $flex.RootingCheck();
        console.log('Return by Native with RootingCheck   : ' + result)
    } catch {
        console.log('RootingCheck() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function Network(promiseHandler) {
    try {
        const result = await $flex.Network();
        console.log('Return by Native with Network   : ' + result)
    } catch {
        console.log('Network() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function QRCodeScan(promiseHandler) {
    try {
        const result = await $flex.QRCodeScan();
        console.log('Return by Native with QRCodeScan   : ' + result)
    } catch {
        console.log('QRCodeScan() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function NFCReading(promiseHandler) {
    try {
        const result = await $flex.NFCReading();
        console.log('Return by Native with NFCReading    : ' + result)
    } catch {
        console.log('NFCReading() error 발생')
    }finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function SendSMS(promiseHandler) {
    try {
        const result = await $flex.SendSMS('01028715836', 'HybridApp에서 보내는 메세지양');
        console.log('Return by Native with NFCReading   : ' + result)
    } catch {
        consoel.log('SendMessage() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}


async function Notification(promiseHandler) {
    try {
        var sendData = {
            "title": "Testtitle"
            , "subTitle": "서브타이틀"
            , "message": "Body메시지입니다."
            , "badge": 0
            , "identifier": "이아연이식별자임"
            , "isRepeat": false
            , "duration": 0
        }
        const result = await $flex.Notification(sendData);
        console.log('Return by Native with Notification   : ' + result)
    } catch {
        consoel.log('Notification() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}


async function FileDownload(promiseHandler) {
    try {
        const result = await $flex.FileDownload("http://www.alessioatzeni.com/wp-content/themes/az/_include/metrize/custom/metrize-icons/download/Metrize_Icons.zip");
        console.log('Return by Native with FileDownload   : ' + result)
    } catch {
        consoel.log('FileDownload() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}


async function LocalRepository(promiseHandler) {
    try {
        const result = await $flex.LocalRepository(mode, forKey, value);
        console.log('Return by Native with UserDefault   : ' + result)
    } catch {
        consoel.log('UserDefault() error 발생')
    }finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function UniqueAppID(promiseHandler) {
    try {
        const result = await $flex.UniqueAppID();
        console.log('Return by Native with UniqueAppID   : ' + result)
    } catch {
        consoel.log('UniqueAppID() error 발생')
    }finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function UniqueDeviceID(promiseHandler) {
    try {
        const result = await $flex.UniqueDeviceID();
        console.log('Return by Native with UniqueDeviceID   : ' + result)
    } catch {
        consoel.log('UniqueDeviceID() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}

async function WebPopup(promiseHandler) {
    try {
        const result = await $flex.WebPopup("https://www.naver.com", 0.8);
        console.log('Return by Native with WebPopup   : ' + result)
    } catch {
        consoel.log('WebPopup() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}


async function Record(promiseHandler) {
    try {
        const result = await $flex.Record();
        console.log('Return by Native with Record   : ' + result)
    } catch {
        consoel.log('Record() error 발생')
    } finally {
        promiseHandler.invokeMethodAsync('SetResult', "");
    }
}
//let [foo, bar] = await Promise.all([getFoor(), getBar()]);