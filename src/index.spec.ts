import { ContractEmployee } from "./model/ContractEmployee";
import { Employee } from "./model/Employee";
import { PermanentEmployee } from "./model/PermanentEmployee";
import { TemporaryEmployee } from "./model/TemporaryEmployee";
describe("Solid principles", () => {
  let permanentEmployee: Employee;
  beforeEach(() => {
    permanentEmployee = new PermanentEmployee("Will", 40000);
  });
  it("get min salary for an permanent employee", () => {
    permanentEmployee = new PermanentEmployee("Will", 40000);
    const minSalary = permanentEmployee.getMinimumSalary();
    expect(minSalary).toBe(40000);
  });

  it("get 10% bonus for permanent employee", () => {
    permanentEmployee = new PermanentEmployee("Will", 40000);
    const bonus = permanentEmployee.getBonus();
    expect(bonus).toBe(440000);
  });
});
