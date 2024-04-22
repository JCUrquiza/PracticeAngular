import { Pipe, PipeTransform } from '@angular/core';

// juan carlos | toggleCase = 'JUAN CARLOS'
// JUAN CARLOS | toggleCase = 'juan carlos'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string):string {
    return value.toUpperCase();
  }

}
