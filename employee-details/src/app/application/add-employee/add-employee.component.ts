import { Component, OnInit } from '@angular/core';
import { AppDataSevice } from '../services/app-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  userName: string = "";
  userId: string = "";

  constructor(public appDataService: AppDataSevice) { }

}
