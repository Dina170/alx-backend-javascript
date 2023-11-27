export default function createIteratorObject(report) {
  const names = [];
  for (const emps of Object.values(report.allEmployees)) {
    names.push(...emps);
  }

  return names;
}
