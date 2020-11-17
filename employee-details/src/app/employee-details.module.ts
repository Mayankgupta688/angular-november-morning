import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { RootComponent } from './root/root.component';

@NgModule({
    declarations: [EmployeeListComponent, HeaderComponent, FooterComponent, RootComponent],
    imports: [BrowserModule],
    bootstrap: [RootComponent]
})
export class EmployeeDetailsModule {}