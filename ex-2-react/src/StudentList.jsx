// StudentList.jsx
import React from 'react';

const StudentList = ({ students, onDelete, onSelectEdit }) => {
    if (students.length === 0) {
        return <p>Không có sinh viên nào!</p>;
    }

    return (
        <table
            border="1"
            cellPadding="8"
            cellSpacing="0"
            style={{ width: '100%', marginBottom: '20px' }}
        >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Điểm</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.score}</td>
                        <td>
                            <button onClick={() => onSelectEdit(student)}>Sửa</button>
                            &nbsp;
                            <button onClick={() => onDelete(student.id)}>Xoá</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;
