import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import {Tambahtugas} from '../tambahtugas/tambahtugas';
/**
 * Generated class for the Tugas page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-tugas',
 	templateUrl: 'tugas.html',
 })
 export class Tugas {
 	token : any;
 	datatugas:any;
 	url:any='http://pantausiswa.xyz/api/guru/tugas';
 	page:number=2;
 	tanggal:any;
 	jam:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public http:Http,public menu:MenuController, public modal:ModalController) {

 	}

 	ionViewDidLoad() {
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);

 			this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datatugas = datas;
 				console.log(this.datatugas)

 				for(let i=this.datatugas.length-1 ;i>=0;i--){
 					this.datatugas[i].tanggal = moment(this.datatugas[i].tanggal).locale('id').format('LL');
 					this.datatugas[i].jam 	= moment(this.datatugas[i].jam,"HH:mm:ss").format('hh:mm');
 				}
 			})

 		})
 	}

 	showmodal(){
 		var modalpage = this.modal.create(Tambahtugas);
 		modalpage.present();
 	}

 }
