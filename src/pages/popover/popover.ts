import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, App,ViewController} from 'ionic-angular';
import {Login} from '../login/login';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the Popover page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-popover',
 	templateUrl: 'popover.html',
 })
 export class Popover {

 	constructor(public navCtrl: NavController, public navParams: NavParams, public app:App, public loading:LoadingController, public storage:Storage, public viewctrl:ViewController ) {
 	}

 	logout()
 	{	this.viewctrl.dismiss();
 		let loader = this.loading.create({
 			content: 'Mohon tunggu..!!',
 			//duration: 1000
 		});
 		loader.present().then(()=>{


 			this.storage.clear();

 			this.app.getRootNav().setRoot(Login);
 			setTimeout(window.location.reload.bind(window.location), 250);


 		})
 		loader.dismiss();

 	}



 }
