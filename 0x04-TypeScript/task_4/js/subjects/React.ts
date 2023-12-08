namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements(): string {
      return "Here are the requirements for React";
    }
    getAvailableTeacher(): string {
      const experience = this.teacher.experienceTeachingReact;
      return experience && experience > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
