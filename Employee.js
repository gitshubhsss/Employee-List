////write a java program to take name, age, jobrole, componey name,and experience
let employee_list = [];
let e_name = prompt("Enter your name");
let age = prompt("Enter your age");
let des = prompt("Enter your designation");
let experience = prompt(`how many year of experience you have as an ${des}`);
let c_name = prompt("Enter the componey name");

let add_employee = (...add_employee) => {
  employee_list.push({ ...add_employee });
  alert("Employee details added successfully");
};

let show_details = () => {
  console.log("Employee details");
  employee_list.forEach((employee, index) => {
    console.log(
      `Employee ${
        index + 1
      }\nName -${e_name}\nAge - ${age}\nDesignation -${des}\nExperience -${experience}\nComponey name - ${c_name}`
    );
  });
};

add_employee(e_name, age, des, experience, c_name);
show_details();

/* Employee details
Employee.js:17 Employee 1
Name -Shubham Ranjane
Age - 21
Designation -software Devoloper
Experience -0-1
Componey name - self-employeed */
