import { Component} from '@angular/core';
import { IonicPage, NavController,MenuController,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment'
import 'rxjs/add/operator/map';

/**
 * Generated class for the Jadwal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-jadwal',
 	templateUrl: 'jadwal.html',
 })
 export class Jadwal {

 	token:any;
 	url ="http://pantausiswa.xyz/api/guru/jadwal";
 	datajadwal:any;
 	key:any;
 	hari: string ="Senin";
 	awal:any;
 	akhir:any;
 	constructor(public navCtrl: NavController, public http:Http, public app:App, public menu:MenuController, public storage : Storage) {
 		this.jadwalguru();
 	}




 	jadwalguru(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);
 			this.http.get(this.url,{headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.datajadwal = datas.kelas;
 				console.log(this.datajadwal[0].namakelas);
 				 for(let i =0; i< this.datajadwal.length;i++){
 				 	this.awal = moment(this.datajadwal[i].awal, "HH:mm:ss").locale('id').format('hh:mm');
 				 	this.akhir = moment(this.datajadwal[i].akhir, "HH:mm:ss").locale('id').format('hh:mm');
 				 }
 			})
 		})
 	}

 }
