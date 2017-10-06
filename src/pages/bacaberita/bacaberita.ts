import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the Bacaberita page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bacaberita',
  templateUrl: 'bacaberita.html',
})
export class Bacaberita {
  public title:any;
  public content:any;
  public image:any;
  public created_at:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.title = navParams.get('title');
    this.content = navParams.get('content');
    this.image = navParams.get('image');
    this.created_at = navParams.get('created_at');

    this.created_at = moment(this.created_at).locale('id').format('LLLL');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bacaberita');
  }
   ionViewDidEnter(){
    this.menu.swipeEnable(false,'menu1');
  }

}
