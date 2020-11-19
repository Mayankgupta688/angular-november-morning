import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { RootComponent } from './containers/root/root.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DelayRenderingDirective } from "./directives/delay-rendering.directive";

import { FormsModule } from "@angular/forms";
import { ChildComponent } from './components/child/child.component';
import { EmpListComponent } from './application/emp-list/emp-list.component';
import { EmpDetailsComponent } from './application/emp-details/emp-details.component';
import { EmpFilterComponent } from './application/emp-filter/emp-filter.component';
import { EmpThemeComponent } from './application/emp-theme/emp-theme.component';
import { HideImageComponent } from './application/hide-image/hide-image.component';

import { HttpClientModule } from "@angular/common/http";
import { AddEmployeeComponent } from './application/add-employee/add-employee.component';

@NgModule({
    declarations: [DelayRenderingDirective, EmployeeListComponent, HeaderComponent, FooterComponent, RootComponent, InterpolationComponent, ChildComponent, EmpListComponent, EmpDetailsComponent, EmpFilterComponent, EmpThemeComponent, HideImageComponent, AddEmployeeComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    bootstrap: [EmpListComponent]
})
export class EmployeeDetailsModule {}