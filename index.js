function createPerson() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:")
    let age =(prompt("Enter your age:"))

    if(isNAN(age)) {
        console.log("invalid age entered.")
        return null
    }
    // create person object
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    return person;
}