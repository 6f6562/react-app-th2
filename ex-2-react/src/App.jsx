import React, { useReducer, useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import AverageScore from './AverageScore';
import { studentReducer } from './StudentReducer';

function App() {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [isEditing, setIsEditing] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('students');
    if (data) {
      dispatch({ type: 'LOAD', payload: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleAdd = (info) => {
    dispatch({ type: 'ADD', payload: { name: info.name, score: info.score } });
  };

  const handleEdit = (info) => {
    dispatch({
      type: 'EDIT',
      payload: { id: info.id, name: info.name, score: info.score }
    });
    setIsEditing(false);
    setEditStudent(null);
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleSelectEdit = (student) => {
    setIsEditing(true);
    setEditStudent(student);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditStudent(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto' }}>
      <h1 style={{ textAlign: 'center' }}>Quản Lý Sinh Viên</h1>

      <StudentForm
        isEditing={isEditing}
        editStudent={editStudent}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onCancelEdit={handleCancelEdit}
      />

      <StudentList
        students={students}
        onDelete={handleDelete}
        onSelectEdit={handleSelectEdit}
      />

      <AverageScore students={students} />
    </div>
  );
}

export default App;
