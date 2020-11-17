import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import { EmployeeDetailsModule } from "./app/employee-details.module";


platformBrowserDynamic().bootstrapModule(EmployeeDetailsModule);
