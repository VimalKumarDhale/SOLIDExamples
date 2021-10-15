import {IEmployee} from './EmployeeContracts';
import {IEmployeeBonus} from './EmployeeContracts';

export abstract class Employee implements IEmployee, IEmployeeBonus {
  name: string;
  salary: number;

  abstract getMinimumSalary(): number;
  abstract getBonus(): number ;
}

