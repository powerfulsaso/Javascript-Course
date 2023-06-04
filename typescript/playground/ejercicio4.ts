console.log("Ejercicio4");

function removeFirstEntry<T extends Array<string | number>>(arr: T): T {
    if (arr.length > 0)
        return arr.slice(1) as T;

    return arr;
}

const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const mixedArray: Array<number | string> = ['Hello', 'I', 'have', 3, 'tasks'];
const unsupportedArray = [{ name: 'Isaac', surname: 'Piedra' }, 'Hello', 45];

const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
//const newUnsupportedArray = removeFirstEntry(unsupportedArray);

console.log(newStrArray);
console.log(newNumArray);
console.log(newMixedArray);
//console.log(newUnsupportedArray);