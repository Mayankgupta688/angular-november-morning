import { NgModule } from "@angular/core";
import { DelayRenderingDirective } from "./directives/delay-rendering.directive";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [DelayRenderingDirective],
    imports: [BrowserModule],
    exports: [DelayRenderingDirective]
})
export class OtherModule {}