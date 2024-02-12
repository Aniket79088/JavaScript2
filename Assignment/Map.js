const contactMap= new Map()

contactMap.set("Aniket",{
    age:30,
    email:"aniket@example.com",
    location:"Hyderabad"
});
contactMap.set("Marry",{
    age:31,
    email:"marry@example.com",
    location: "Chennai",
});
contactMap.set("Lobsen",{
    age:25,
    email:"lobsen@example.com",
    location:"Goa",
});

function getContact(name){
    return contactMap.get(name);
}

console.log(getContact("Aniket"));