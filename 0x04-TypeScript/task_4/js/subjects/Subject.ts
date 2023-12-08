namespace Subjects {
  export class Subject {
    constructor(public teacher: Teacher) {}
    setTeacher(value: Teacher) {
      this.teacher = value;
    }
  }
}
