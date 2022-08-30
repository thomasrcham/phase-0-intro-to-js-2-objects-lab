const employee = {}
const newEmployee ={}

function updateEmployeeWithKeyAndValue (obj, key, value){
    let newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    let newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete obj[key];
    return obj;
}