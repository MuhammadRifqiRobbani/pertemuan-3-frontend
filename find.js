const users = [{
        name: "rifqi",
        age: 21
    },
    {
        name: "Husein",
        age: 19
    },
    {
        name: "Johan",
        age: 19
    },
]

const hasil = users.find((user) => {
    return user.age > 18;
});

console.log(hasil);