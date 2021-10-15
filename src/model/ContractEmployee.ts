import { IEmployee } from "./EmployeeContracts";
export class ContractEmployee implements IEmployee {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  getMinimumSalary(): number {
    return this.salary;
  }
}
