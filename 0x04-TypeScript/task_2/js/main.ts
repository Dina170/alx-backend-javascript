interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  return typeof salary === "number" && salary < 500
    ? new Teacher()
    : new Director();
}

function isDirector(employee: any): boolean {
  return employee instanceof Director;
}

function executeWork(employee: any) {
  return isDirector(employee)
    ? console.log(employee.workDirectorTasks())
    : console.log(employee.workTeacherTasks());
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  return todayClass === "Math" ? "Teaching Math" : "Teaching History";
}
