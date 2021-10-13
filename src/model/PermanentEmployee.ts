import { Employee } from "./Employee";
export class PermanentEmployee extends Employee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    super();
    this.name = name;
    this.salary = salary;
  }
  getMinimumSalary(): number {
    return this.salary;
  }
  getBonus(): number {
    return this.salary;
  }
}
