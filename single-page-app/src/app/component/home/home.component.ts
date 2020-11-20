import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployee } from "../interface/IEmployee";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeList: IEmployee[] = [];

  intervalObject: any = null;

  constructor(private _http: HttpClient, private _router: Router) { }

  redirectToDetails(userId, userName) {
    this._router.navigate(['/details', userId, userName]);
  }

  ngOnInit(): void {
    this._http.get("http://localhost:3000/empList").subscribe((data: IEmployee[]) => {
      this.employeeList = data;
    })

    this.intervalObject = setInterval(() => {
      this._http.get("http://localhost:3000/empList").subscribe((data: IEmployee[]) => {
        this.employeeList = data;
      })
    }, 10000);

  }

  addEmployee() {
    var newEmployee = {
      "id": "11",
      "name": "Aniket Batra",
      "avatar": "https://i.picsum.photos/id/30/200/300.jpg?hmac=qOyV_daSIK2KgaEj7CZYTR3n4xgqMNwskTxH7QMVGfg",
    }
    this.employeeList.push(newEmployee)
  }

  ngOnDestroy() {
    this.intervalObject();
  }

}
