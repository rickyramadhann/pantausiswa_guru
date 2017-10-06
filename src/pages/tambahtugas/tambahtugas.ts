import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController, AlertController, LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import * as moment from 'moment';
/**
 * Generated class for the Tambahtugas page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-tambahtugas',
 	templateUrl: 'tambahtugas.html',
 })
 export class Tambahtugas {
 	public frmtugas = {
 		id_kelas: '',
 		id_matpel: '',
 		materi: '',
 		keterangan: '',
 		tanggal: '',
 		jam: '',

 	};
 	kelas:any;
 	matpel:any;
 	token:any;
 	url:any='http://pantausiswa.xyz/api/guru/kelasngajar';
 	url2:any='http://pantausiswa.xyz/api/guru/tugas';
 	constructor(public http:Http, public storage:Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public alert:AlertController, public loading:LoadingController) {
 		this.getkelas();
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Tambahtugas');
 	}

 	getkelas(){
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);

 			this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.kelas = datas.kelas;
 				this.matpel = datas.matpel;
 				console.log(this.matpel);
 			})

 		})
 	}

 	closeModal(){
 		this.viewCtrl.dismiss();
 	}

 	kirimtugas(){
 		if(this.frmtugas.id_kelas ===''||this.frmtugas.id_matpel===''||this.frmtugas.materi===''||this.frmtugas.keterangan==='' ||this.frmtugas.tanggal==='' ||this.frmtugas.jam===''){
 			let alert = this.alert.create({
 				title: 'warning',
 				subTitle: 'Email dan password tidak boleh kosong',
 				buttons: ['ok']
 			});
 			alert.present();
 		}
 		else{
 			let loader = this.loading.create({
 				content: 'Mohon tunggu..!!',
 				//duration: 1000
 			});
 			loader.present().then(()=>{
 				this.storage.get('token').then(token=>{
 					this.token=token;
 					let header = new Headers();
 					header.append('Content-Type', 'Application/json');
 					header.append('Accept','Application/json');
 					header.append('Authorization', 'Bearer '+ this.token);
 					let options = new RequestOptions({headers:header});
 					console.log(this.frmtugas)
 					this.http.post(this.url2,JSON.stringify(this.frmtugas),options).map(res => res.json())
 					.subscribe(data => {
 						let alert = this.alert.create({
 							title: 'Sukses',
 							subTitle: 'Tugas telah berhasil dikirim',
 							buttons: ['ok']
 						});
 						console.log("berhasil");
 						alert.present();
 						loader.dismiss();
 						this.viewCtrl.dismiss();
 					},error=> {
 						let alert = this.alert.create({
 							title: 'warning',
 							subTitle: 'Tugas gagal dikirim',
 							buttons: ['ok']
 						});
 						alert.present();
 						loader.dismiss();
 					});
 				});
 			}); 
 		}
 		
 	}

 }
