console.log("Ejercicio 1");

//Declarar objeto persona
let person = {
    name: "Lucas",
    age: 27,
    profesion: "Developer",
}

//Crear funcion tipo arrow
let propsFunction = (obj) => {
    let result = [];

    //un objeto es una coleccion de attributos
    //se puede iterar para obtener los nombres
    //de los atributos
    for (let atributo in obj) {
        result.push(atributo);
    }

    return result;

}

console.log(propsFunction(person));