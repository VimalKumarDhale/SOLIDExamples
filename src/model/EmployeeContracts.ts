export interface IEmployee{
    name: string;
    salary:number;
    getMinimumSalary() : number;
}

export interface IEmployeeBonus{
    getBonus() : number;
}