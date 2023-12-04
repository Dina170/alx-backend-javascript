export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const theGrade = newGrades.find((grade) => grade.studentId === obj.id);
      return {
        ...obj,
        grade: theGrade ? theGrade.grade : 'N/A',
      };
    });
}
