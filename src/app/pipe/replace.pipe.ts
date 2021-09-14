import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'replace'
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, char:string,changed:string) {
        return value.replace(char, changed);
        throw new Error("Method not implemented.");
    }



}