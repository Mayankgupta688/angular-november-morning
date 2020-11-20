import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../interface/IEmployee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userId: string = "";
  userDetails: IEmployee;
  userName: string;

  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {

    debugger;
    this.userId = this._route.snapshot.paramMap.get("id")
    this.userName = this._route.snapshot.paramMap.get("name")

    this._http.get(`http://localhost:3000/empList/${this.userId}`).subscribe((data: IEmployee) => {
      this.userDetails = data;
    })
  }

}
