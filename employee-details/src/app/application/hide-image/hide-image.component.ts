import { Component, OnInit } from '@angular/core';
import { AppDataSevice } from '../services/app-data.service';

@Component({
  selector: 'app-hide-image',
  templateUrl: './hide-image.component.html',
  styleUrls: ['./hide-image.component.css']
})
export class HideImageComponent {

  constructor(private _appDataService: AppDataSevice) { }

  toggleImage() {
    this._appDataService.toggleImageEvent.emit();
  }

}
