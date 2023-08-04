const employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};

    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";

    return employee;

}

function deleteFromEmployeeByKey(employee, key, value) {
    const removeEmployee = { ...employee};
    delete removeEmployee.name;

    return removeEmployee;

}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;

    return employee;

}

