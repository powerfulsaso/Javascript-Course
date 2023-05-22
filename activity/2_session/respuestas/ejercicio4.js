console.log("Ejercicio 4");

export class Login {
    constructor(userName, password) {
        this._userName = userName;
        this._password = password;
    }

    login() {
        if (this._userName === "admin"
            && this._password === 'passwd') {
            alert("User logged in");
            console.log("alert -> User logged in");
        } else {
            alert("User or password incorrect");
            console.log("alert -> User or password incorrect");
        }
    }
}

let login = new Login("admin", "passwd");
login.login();
let logbad = new Login("pepe", "bad");
logbad.login();