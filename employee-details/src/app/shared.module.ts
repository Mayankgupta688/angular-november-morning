import { NgModule } from "@angular/core";
import { EmpThemeComponent } from './application/emp-theme/emp-theme.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertUnderScoreToSpacePipe } from "./application/pipes/convert-underscore.pipe"

@NgModule({
    declarations: [EmpThemeComponent, ConvertUnderScoreToSpacePipe],
    imports: [BrowserModule],
    exports: [EmpThemeComponent, ConvertUnderScoreToSpacePipe]
})
export class SharedModule {}