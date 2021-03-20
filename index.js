// Write your solution in this file!
const employee = {
    name: 'Thomas', 
    streetAddress: '5034, Peanut'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee['name']='Sam';
    newEmployee['streetAddress'] = '11 Broadway' 
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['Sam', '11 Broadway']
    return employee
}
