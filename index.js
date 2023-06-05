// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = 'Paul';
}

console.log(changeLeastFavoriteCustomer());