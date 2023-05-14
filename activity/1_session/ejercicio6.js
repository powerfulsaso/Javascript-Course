console.log("Ejercicio 6");

let formatter = {
    prefix: "Hello ",
    append: function (mensaje) {
        console.log(`${this.prefix}${mensaje}`);
    }
}

formatter.append("World");

formatter.toLowerString = function (mensaje) {
    console.log(mensaje.toLowerCase());
}

formatter.toLowerString("I'm Lucas");