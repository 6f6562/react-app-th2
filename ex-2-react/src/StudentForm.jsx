// StudentForm.jsx
import React, { useRef, useEffect } from 'react';

const StudentForm = ({
  isEditing,
  editStudent,
  onAdd,
  onEdit,
  onCancelEdit
}) => {
  const nameRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    if (isEditing && editStudent) {
      nameRef.current.value = editStudent.name;
      scoreRef.current.value = editStudent.score;
      nameRef.current.focus();
    } else {
      if (nameRef.current) nameRef.current.value = '';
      if (scoreRef.current) scoreRef.current.value = '';
    }
  }, [isEditing, editStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value.trim();
    const scoreValue = scoreRef.current.value.trim();

    if (!nameValue) {
      alert('Vui lòng nhập tên sinh viên!');
      return;
    }

    const scoreNumber = parseFloat(scoreValue);
    if (isNaN(scoreNumber) || scoreNumber < 0 || scoreNumber > 10) {
      alert('Điểm phải từ 0 đến 10!');
      return;
    }

    if (isEditing && editStudent) {
      onEdit({
        id: editStudent.id,
        name: nameValue,
        score: scoreNumber
      });
    } else {
      onAdd({
        name: nameValue,
        score: scoreNumber
      });
    }

    nameRef.current.value = '';
    scoreRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Tên sinh viên"
        ref={nameRef}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Điểm"
        ref={scoreRef}
        style={{ marginRight: '10px', width: '80px' }}
      />
      <button type="submit">
        {isEditing ? 'Sửa điểm' : 'Thêm sinh viên'}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={onCancelEdit}
          style={{ marginLeft: '10px' }}
        >
          Hủy
        </button>
      )}
    </form>
  );
};

export default StudentForm;
