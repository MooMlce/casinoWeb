const TG_WEBAPP = window.Telegram.WebApp;

TG_WEBAPP.ready();
console.log("Hello World!", TG_WEBAPP.initDataUnsafe);

TG_WEBAPP.sendData(JSON.stringify({
    test: "ffffff"
}))