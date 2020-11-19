import { Component, OnInit } from '@angular/core';
import { AppDataSevice } from "../services/app-data.service";

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

  employeeList: any[];
  filteredList: any[];
  applicationTheme: string = "black";
  userName = "";

  showForm: boolean = false;

  constructor(private _appDataService: AppDataSevice) { 
    this._appDataService.getData().subscribe((data: any) => {
      this.employeeList = data;
      this.filteredList = data;
      this._appDataService.empList = data;

      this._appDataService.getData().subscribe((data: any) => {
        console.dir(data)
      })
    })

    

    this.userName = this._appDataService.userName;
  }

  deleteEmployeeFromList(inputEmp) {

    this._appDataService.deleteData(inputEmp.empId).subscribe((data) => {
      this.employeeList = this.employeeList.filter((employee) => {
        return employee.id != inputEmp.empId;
      })
  
      this.filteredList = this.filteredList.filter((employee) => {
        return employee.id != inputEmp.empId;
      })
    }, (err) => {
      alert("Failed to Delete...")
    });
  }

  showEmployeeForm() {
    this.showForm = true;
  }

  clearEmployeeFilter(command: string) {
    if(command == "clear") {
      this.filteredList = this.employeeList;
    }
  }

  filterEmployeeList(filterText) {
    this.filteredList = this.employeeList.filter((employee) => {
      return employee.name.indexOf(filterText) > -1;
    })
  }

  updateThemeEvent($event) {
    this.applicationTheme = $event;
  }

}
