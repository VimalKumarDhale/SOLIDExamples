import { ContractEmployee } from "./model/ContractEmployee";
import { Employee } from "./model/Employee";
import { PermanentEmployee } from "./model/PermanentEmployee";
import { TemporaryEmployee } from "./model/TemporaryEmployee";

class EmployeeDetail {
  permanentEmployee: Employee = new PermanentEmployee("Will", 40000);
  temporaryEmployee: Employee = new TemporaryEmployee("John", 40000);
  //As per the third SOLID principle, Liskove Substitution, the type of the base type should be replaceable with the sub type.
  contractEmployee: IEmployee = new ContractEmployee("Anne", 40000);

  getPermanentEmployeeDetail(): void {
    const salary = this.permanentEmployee.getMinimumSalary();
    const bonus = this.permanentEmployee.getBonus();
    console.log({
      type: "Permanent",
      Name: this.permanentEmployee.name,
      Salary: salary,
      Bonus: bonus,
    });
  }

  getTemporaryEmployeeDetail(): void {
    const salary = this.temporaryEmployee.getMinimumSalary();
    const bonus = this.temporaryEmployee.getBonus();
    console.log({
      type: "Temporary",
      Name: this.permanentEmployee.name,
      Salary: salary,
      Bonus: bonus,
    });
  }

  getContractEmployeeDetail(): void {
    const salary = this.contractEmployee.getMinimumSalary();
    //If you uncomment the code it will not allow to ge the bouse for a contract employee.
    //const bonus = this.contractEmployee.getBonus();
    console.log({
      type: "Contract",
      name: this.contractEmployee.name,
      Salary: salary,
    });
  }
}

let employeeDetail: EmployeeDetail = new EmployeeDetail();
employeeDetail.getPermanentEmployeeDetail();
employeeDetail.getContractEmployeeDetail();
employeeDetail.getTemporaryEmployeeDetail();
