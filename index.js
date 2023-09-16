// Write your solution in this file!

const employee = {
    name: "Mark Mwangi",
    streetAddress: "Kikuyu Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log(updatedEmployee);
  
  const mutatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");
  console.log(mutatedEmployee);
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log(deletedEmployee);
  
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructivelyDeletedEmployee);
  
  console.log(employee); 
  