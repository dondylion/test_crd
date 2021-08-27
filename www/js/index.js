
document.addEventListener('deviceready', onDeviceReady, false);

const splash = document.querySelector('.splash');

setTimeout(()=>{
    splash.classList.add('display-none');
}, 5000);

function onDeviceReady() {

    window.open = cordova.InAppBrowser.open;
    let ref = window.open('https://www.site.com', '_blank', 'hidden=yes');
    ref.addEventListener('loadstop', ()=>{
        splash.classList.add('display-none');
        ref.show();
    });

     window.plugins.OneSignal.setAppId("2b3bfcbc-7af1-4436-85ef-e9d8a63cedfd");
     window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData) {
         console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });

}