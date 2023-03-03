import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  constructor(private dom:DomSanitizer){

  }

  transform(value: any) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
