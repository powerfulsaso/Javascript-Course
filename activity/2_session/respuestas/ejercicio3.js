console.log("Ejercicio 3");
class InvertirCadena {
    cadenaInvertir = "";

    invertir() {
        if (this.cadenaInvertir == "") {
            throw "cadena vacia";

        }

        let nuevaCadena = "";
        for (var i = this.cadenaInvertir.length - 1; i >= 0; --i) {
            nuevaCadena += this.cadenaInvertir[i];
        }

        console.log(nuevaCadena);
    }
}

try {
    console.log("Invertir con error");
    let invertirConError = new InvertirCadena();
    invertirConError.invertir();


} catch (error) {
    console.log(error);
}

console.log("Invertir Hola mundo");
let invertirCadena = new InvertirCadena();
invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir();

invertirCadena.nuevoMetodo?.();