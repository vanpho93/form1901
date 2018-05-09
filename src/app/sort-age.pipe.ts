import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAge'
})
export class SortAgePipe implements PipeTransform {

  transform(people: any[]): any[] {
    return people.sort((p1, p2) => p1.age - p2.age);
  }

}
