// random name generator
function randomName() {
    var firstName = ["John", "Jane", "Mary", "Tom", "Bob", "Sam", "Jack", "Jill", "Sue", "Joe", "Mary", "Tom", "Bob", "Sam", "Jack", "Jill", "Sue", "Joe"];
    var lastName = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin"];
    var randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    var randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    return randomFirstName + " " + randomLastName;

}
console.log(randomName());