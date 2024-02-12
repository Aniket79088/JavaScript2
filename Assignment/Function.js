 function displayInfo(name, role) { 
    console.log(`Name: ${name}, Role: ${role}`);

}

displayInfo.call(null, "Aniket", "Developer");


 displayInfo.apply(null, ["Nehal", "SDE"]);

 function greet() { 
    console.log(`Hello, ${this.name}!`);

}

const user = {name: "Akshay"};
const boundGreet = greet.bind(user);
boundGreet();