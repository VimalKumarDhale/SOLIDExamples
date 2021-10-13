interface IEmployee{
    name: string;
    salary:number;
    getMinimumSalary() : number;
}

interface IEmployeeBonus{
    getBonus() : number;
}