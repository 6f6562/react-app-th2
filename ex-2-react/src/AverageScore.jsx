import React, { useMemo } from 'react';

const AverageScore = ({ students }) => {
    const averageScore = useMemo(() => {
        if (students.length === 0) return 0;
        const sum = students.reduce((acc, s) => acc + s.score, 0);
        return (sum / students.length).toFixed(2);
    }, [students]);

    return (
        <h2>Điểm trung bình: {averageScore}</h2>
    );
};

export default AverageScore;
