import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";
import { EmployeeDetailsModule } from 'src/app/employee-details.module';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AppDataSevice {
    empList: any[] = [];
    userName: string = "Mayank Gupta";

    toggleImageEvent: EventEmitter<void>;

    constructor(private _http: HttpClient) {
        this.toggleImageEvent = new EventEmitter<void>();
    }

    getData() {
        if(this.empList.length > 0) {
            return of(this.empList);
        }
        return this._http.get("http://localhost:3000/empList");
    }

    deleteData(empId) {
        return this._http.delete(`http://localhost:3000/empList/${empId}`);
    }

    addEmployeeData(data) {
        debugger;
        this._http.post("http://localhost:3000/empList", {
            id: data.userId,
            name: data.userName,
            "avatar": "https://i.picsum.photos/id/30/200/300.jpg?hmac=qOyV_daSIK2KgaEj7CZYTR3n4xgqMNwskTxH7QMVGfg",
            createAt: new Date().toDateString()
        }).subscribe(() => {
            alert("Employee Added...")
        }, () => {
            alert("Failed to Add Employee")
        })
    }
}