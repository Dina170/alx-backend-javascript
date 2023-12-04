export default function getStudentIdsSum(array) {
  return array.reduce((sum, current) => sum + current.id, 0);
}
