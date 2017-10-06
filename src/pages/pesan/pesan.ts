import { Component } from '@angular/core';
import { NavController,App, PopoverController } from 'ionic-angular';
import { Popover } from '../popover/popover';

@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan.html'
})
export class Pesan {

  constructor(public navCtrl: NavController, public app:App, public popover:PopoverController) {

  }
    presentPopover(myEvent){
    let popoverr = this.popover.create(Popover);

    popoverr.present({
      ev:myEvent
    });
  }
}
