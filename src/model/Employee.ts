export abstract class Employee implements IEmployee, IEmployeeBonus {
  name: string;
  salary: number;

  abstract getMinimumSalary(): number;
  getBonus(): number {
    return this.salary + this.salary * 0.5;
  }
}
