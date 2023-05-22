var loginWithUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
        setTimeout(() => {
            if (username === "lucferbux" && password === "patata") {
                resolve("User logged in");
            } else {
                rejected("Error: invalid username or password");
            }
        }, 200);
    });

};

const loginAsyncButton = document.getElementById("loginSuccessAsync");
loginAsyncButton.addEventListener("click", async (event) => {
    console.log("Ejercicio 6a");
    try {
        let response = await loginWithUsername("lucferbux", "patata");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});

const badLoginAsyncButton = document.getElementById("loginFailureAsync");
badLoginAsyncButton.addEventListener("click", async (event) => {
    console.log("Ejercicio 6b");
    try {
        let response = await loginWithUsername("isaac", "patata");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});