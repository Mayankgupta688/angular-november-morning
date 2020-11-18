import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { RootComponent } from './containers/root/root.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { DelayRenderingDirective } from "./directives/delay-rendering.directive";

import { FormsModule } from "@angular/forms";
import { ChildComponent } from './components/child/child.component'

@NgModule({
    declarations: [DelayRenderingDirective, EmployeeListComponent, HeaderComponent, FooterComponent, RootComponent, InterpolationComponent, ChildComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [EmployeeListComponent]
})
export class EmployeeDetailsModule {}