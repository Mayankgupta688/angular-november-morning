import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertUnderscoreToSpaces"
})
export class ConvertUnderScoreToSpacePipe implements PipeTransform {
    transform(value: string, replace: string, replacement: string): string {
        return value.replace(replace, replacement)
    }
}