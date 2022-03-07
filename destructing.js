/**
 * Membuat object of object
 */
const req = {
    body: {
        name: "rifqi",
        age: 21,
        major: "Informatics"
    },
};

// melakukan destructing

const {
    name,
    age,
    major
} = req.body;

// Destructing array
const family = ["jono", "Hania", "Johan"];

const [husband, wife, son] = family;

console.log(husband);