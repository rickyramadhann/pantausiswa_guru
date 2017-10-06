import { Component } from '@angular/core';
import { NavController, NavParams,  ViewController, AlertController, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Nilaip} from '../nilaip/nilaip';
//import * as moment from 'moment';

/**
 * Generated class for the Nilai page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-nilai',
 	templateUrl: 'nilai.html',
 })
 export class Nilai {

 	constructor(public http:Http, public storage:Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public alert:AlertController, public loading:LoadingController) {
 	
 	}
 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Nilai');
 	}

 	kenilaip(){
 		this.navCtrl.push(Nilaip,{
 			jenis:"Kompetensi Pengetahuan Dasar"
 		});
 	}

 }
