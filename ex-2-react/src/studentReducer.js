// studentReducer.js
export const studentReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD': {
            // Tải danh sách từ localStorage
            return action.payload;
        }
        case 'ADD': {
            // Thêm sinh viên mới
            const newStudent = {
                id: Date.now(), // hoặc dùng uuid
                name: action.payload.name,
                score: parseFloat(action.payload.score) || 0
            };
            return [...state, newStudent];
        }
        case 'EDIT': {
            // Sửa thông tin sinh viên
            const { id, name, score } = action.payload;
            return state.map(student =>
                student.id === id
                    ? { ...student, name, score: parseFloat(score) || 0 }
                    : student
            );
        }
        case 'DELETE': {
            // Xoá sinh viên
            const { id } = action.payload;
            return state.filter(student => student.id !== id);
        }
        default:
            return state;
    }
};
