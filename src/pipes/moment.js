var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
import * as moment from 'moment';
/**
 * Generated class for the Moment pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var Moment = (function () {
    function Moment() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    Moment.prototype.transform = function (value, args) {
        var moments = moment(value).locale('id').startOf('minute').fromNow();
        return moments;
    };
    return Moment;
}());
Moment = __decorate([
    Pipe({
        name: 'moment',
    })
], Moment);
export { Moment };
//# sourceMappingURL=moment.js.map