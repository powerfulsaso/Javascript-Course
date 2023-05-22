import * as auth from "./ejercicio4.js";

const loginButton = document.getElementById("loginSuccess");
loginButton.addEventListener("click", (event) => {
    console.log("Ejercicio 5a");
    let login = new auth.Login("admin", "passwd");
    login.login();
});

const badLoginButton = document.getElementById("loginFailure");
badLoginButton.addEventListener("click", (event) => {
    console.log("Ejercicio 5b");
    let logbad = new auth.Login("pepe", "bad");
    logbad.login();
})