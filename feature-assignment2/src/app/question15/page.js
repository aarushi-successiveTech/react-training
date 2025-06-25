/* Create a functional component named StudentList that displays a list of student names..
Define an array of student names as a constant within the component.
Use the useMemo hook to memoize the list of student names.
Render the list of student names on the screen.
Include a button that, when clicked, appends a new student name to the list. */
"use client";
import { useMemo, useState } from "react";

const StudentList = () => {
  const [student, setStudent] = useState(["Aarushi", "Eklavya", "Akhil"]);
  const [newStudent, setNewStudent] = useState("");

  const displayList = useMemo(() => {
    return student.map((student, index) => <li key={index}>{student}</li>);
  }, [student]);

  return (
    <div>
      <h2>Student List : </h2>
      <ul>{displayList}</ul>

      <input
        type="text"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
        placeholder="Enter new student name: "
        style={{ width: "300px", height: "35px", fontSize: "16px" }}></input>

      <button
        style={{
          padding: "7px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() =>
          newStudent.trim() &&
          (setStudent([...student, newStudent.trim()]), setNewStudent(""))
        }>
        Add Student
      </button>
    </div>
  );
};

export default StudentList; 