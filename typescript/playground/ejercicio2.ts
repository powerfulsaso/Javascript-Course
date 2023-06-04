console.log('Ejercicio2');

type pType = string | number;

function sumOrConcatenate(p1: pType, p2: pType): pType {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    } else if (typeof p1 === "string" && typeof p2 === "string") {
        return `${p1}-${p2}`;
    } else {

        return p1 + ":" + p2;
    }
}

console.log(sumOrConcatenate(4, 3));
console.log(sumOrConcatenate(4, "hello"));
console.log(sumOrConcatenate("hello", "world"));