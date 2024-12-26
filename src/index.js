const TG_WEBAPP = window.Telegram.WebApp;

console.log("Hello World!", TG_WEBAPP);

const FFF = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));
FFF.innerHTML = window.location.origin;

setTimeout(() => {
    // TG_WEBAPP.sendData(
    //     JSON.stringify({
    //         test: "ffffff"
    //     })
    // );
}, 1000)
