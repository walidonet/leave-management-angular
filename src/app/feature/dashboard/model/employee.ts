export class Employee {

    employeeId: number;
    fullName: string;
    username: string;
    password: string;
    role: string;
    status: number;
    titre: string;
    employeeSupervisor: Employee;

    constructor(id) {
       this.employeeId = id;
    }
}
