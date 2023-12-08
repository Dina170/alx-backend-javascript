namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here are the requirements for Cpp";
    }
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingC;
      return experience && experience > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
