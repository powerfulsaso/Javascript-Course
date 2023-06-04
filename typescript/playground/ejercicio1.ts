console.log('Ejercicio 01');
interface Person {
    name: string;
    age: number;
    profession: string;
};

let properties = (person: Person): Array<string | number> => {
    const { name, age, profession } = person;
    return [name, age, profession];
};

let yo: Person = { name: "Isaac", age: 45, profession: "Fullstack" };
console.log(properties(yo));
