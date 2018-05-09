import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProp'
})
export class SortPropPipe implements PipeTransform {

  transform(people: any[], propName: string): any[] {
    return people.sort((p1, p2) => {
      if (typeof p1[propName] === 'string') {
        return (p1[propName] as string).localeCompare(p2[propName]);
      }
      return p1[propName] - p2[propName];
    });
  }

}
