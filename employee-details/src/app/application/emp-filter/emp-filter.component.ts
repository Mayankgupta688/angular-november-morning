import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppDataSevice } from '../services/app-data.service';

@Component({
  selector: 'app-emp-filter',
  templateUrl: './emp-filter.component.html',
  styleUrls: ['./emp-filter.component.css']
})
export class EmpFilterComponent {
  filterText: string;
  fiterTextData: string = "";
  @Output() filterEmployeesEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() clearFilterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public appDataService: AppDataSevice) {}

  filterEmployees() {
    alert(this.filterText);
    this.filterEmployeesEvent.emit(this.filterText);
  }

  ngDoCheck() {
    this.fiterTextData = `Changing Value from  ${this.filterText}`
  }

  clearFilter() {
    this.filterText = "";
    this.clearFilterEvent.emit("clear");
  }
}
