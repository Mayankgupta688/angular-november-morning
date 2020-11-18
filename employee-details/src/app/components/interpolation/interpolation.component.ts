import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  private userName: string = "Ankit Gupta";
  public userAge: number = 20;
  public userDesignation: string = "";
  public salaryArray = [10, 20, 30];

  public userDetailObject = {
    salary: 2000,
    address: "India"
  }

  constructor() {
    setTimeout(() => {
      this.userAge = 1000;
      this.salaryArray[0] = 30;
    }, 5000)
  }

  getDetails() {
    return `The User Name is ${this.userName}, User age is ${this.userAge}`;
  }
}
