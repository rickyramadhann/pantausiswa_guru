import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


/**
 * Generated class for the Moment pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'moment',
})
export class Moment implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value,args) {
    let moments = moment(value).locale('id').startOf('minute').fromNow();
    return moments
  }
}
