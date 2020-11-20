import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppDataSevice } from '../services/app-data.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {
  @Input() applicationTheme: string;
  @Input() employee: any;
  @Output() notifyDelete: EventEmitter<string> = new EventEmitter<string>();

  showImage: boolean = true;

  constructor(private _appDataService: AppDataSevice) {
    this._appDataService.toggleImageEvent.subscribe(() => {
      this.showImage = !this.showImage;
    })
  }

  ngOnChanges(changes) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  deleteEmployee(employee) {
    alert(`We are going to delete Employee with id ${employee.empName}`);
    this.notifyDelete.emit(employee);
  }
}
