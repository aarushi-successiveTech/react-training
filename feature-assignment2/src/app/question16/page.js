/* Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries. */
'use client'
import { useState, useMemo } from "react";
 
const employeeList = [
    {name: 'Aryan', salary : 2000},
    {name: 'Piyush', salary : 5000},
    {name: 'Preeti', salary : 6000},
]

const EmployeeSalary = () => {
    const [employee, setEmployee] = useState(employeeList);

    const AverageSalary = useMemo(() => {
        const total = employee.reduce((sum, emp)=> sum + emp.salary, 0);
        return (total/employee.length).toFixed(2);
    },[employee]);

    const update = () => {
        const updated = employee.map(emp => ({
            ...emp, salary: Math.floor(Math.random() * 200 * 200)
        }));
        setEmployee(updated)
    };

    return(
        <div>
            <h2>Employee Salaries: </h2>
            <ul>
                {employee.map((emp, index) => (
                    <li key = {index}>{emp.name} : {emp.salary}</li>
                ))}
            </ul>
            <h3>Average salary: {AverageSalary}</h3>
            <button onClick={update}>Update Salary</button>
        </div>
    )
};

export default EmployeeSalary;