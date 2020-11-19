import { Component, EventEmitter, Output } from '@angular/core';
import { AppDataSevice } from '../services/app-data.service';

@Component({
  selector: 'app-emp-theme',
  templateUrl: './emp-theme.component.html',
  styleUrls: ['./emp-theme.component.css']
})
export class EmpThemeComponent {

  @Output() updateThemeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(public appDataService: AppDataSevice) {}

  updateTheme(themeColor) {
    this.updateThemeEvent.emit(themeColor)
  }
}
