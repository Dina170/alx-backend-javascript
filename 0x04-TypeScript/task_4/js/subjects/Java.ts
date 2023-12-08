namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    getRequirements(): string {
      return "Here are the requirements for Java";
    }
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingJava;
      return experience && experience > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
