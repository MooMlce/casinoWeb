const TG_WEBAPP = window.Telegram.WebApp;

console.log("Hello World!", TG_WEBAPP.initDataUnsafe);

setTimeout(() => {
    TG_WEBAPP.sendData(
        JSON.stringify({
            test: "ffffff"
        })
    );
}, 1000)
