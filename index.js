function createPerson() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    let age = prompt("Enter your age:");

    
    if (isNaN(age)) {
        console.log("Invalid age entered.");
        return null;
    }

    // Create person object
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age) 
    };
    return person;
}
