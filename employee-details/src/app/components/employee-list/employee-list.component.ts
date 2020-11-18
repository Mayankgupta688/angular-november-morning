import { Component } from "@angular/core";
import * as data from "../../data/employees.json";

@Component({
    selector: "app-employee-list",
    templateUrl: "./employee-list.component.html",
    styleUrls: ["./employee-list-other.component.css", "./employee-list.component.css"]
})
export class EmployeeListComponent {

    employeeList: any[];
    filteredList: any[];
    filterText: string = "";

    firstHeading: string = "TechnoFunnel Employee.....";
    secondHeading: string = "Welcome to Session.....";

    updateHeading() {
        this.firstHeading = "Heading Updated...";
        this.secondHeading = "This is Updated as well..."
    }

    deleteEmployee(name: string, id:string) {
        alert(`Do you want to Delete ${name}`);

        this.employeeList = this.employeeList.filter((employee) => {
            return employee.id !== id;
        });

        this.filteredList = this.filteredList.filter((employee) => {
            return employee.id !== id;
        });
    }

    filterEmployeeList(value) {  
        this.filterText = value;
        this.filteredList = this.employeeList.filter((employee) => {
            return employee.name.indexOf(value) > -1;
        });
    }

    constructor() {
        this.employeeList = data.empList;
        this.filteredList = data.empList;
    }
}

