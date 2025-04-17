let data = {
    name: "Arth Koradiya",
    age: 25,
    email: 'abc@test.in',
    indian: true,
    hobbies: ['Music', 'Dance', 'Reading'],
    address: {
        line1: "Royal arcade",
        line2: "Sarthana Jakatnaka",
        city: "Surat",
        pincode: 395006
    }
}

console.log(data.hobbies);

console.log(data['address']);

console.log(data.hobbies[1]);

console.log(data["hobbies"][0]);

console.log(data.address.city);

console.log(data["address"]["pincode"]);

for (let i in data) {
    console.log(data[i]);
}

for (let i of data) {
    console.log(data)
}