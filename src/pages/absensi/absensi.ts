import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,  ViewController, AlertController, LoadingController, Slides} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
/**
 * Generated class for the Absensi page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-absensi',
 	templateUrl: 'absensi.html',
 })
 export class Absensi {

 	token : any;
 	datatugas:any;
 	url:any='http://pantausiswa.xyz/api/guru/kelasngajar';
 	url2:any='http://pantausiswa.xyz/api/guru/absensis';
 	page:number=2;
 	kelas:any;
 	matpel:any;
 	siswa:any;
 	idsiswa:any[]=[];
 	public frmabsensi = {
 		kelas: '',
 		checkbox:this.idsiswa,
 		matpel: '',
 		keterangan:[]
 		
 	};
 	datasiswa:any;
 	public buttonClicked: boolean = false;
 	
 	
 	constructor(public http:Http, public storage:Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public alert:AlertController, public loading:LoadingController) {


 	}


 	ionViewDidLoad() {
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);

 			this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.kelas = datas.kelas;
 				this.matpel = datas.matpel;
 				this.siswa = datas.siswa;
 				for(let i=0; i<this.siswa.length;i++){
 					this.idsiswa.push(this.siswa[i].id);
 				}
 				console.log(this.matpel);
 			})

 		})
 		
 	}

 	tampilsiswa(){
 		var resultArray:Array<any>=[] 
 		this.buttonClicked = !this.buttonClicked;
 		for(let i =0; i<this.siswa.length;i++){
 			if(this.siswa[i].id_kelas ==  this.frmabsensi.kelas){
 				resultArray.push({
 					"id":this.siswa[i].id,
 					"name":this.siswa[i].name
 				})
 				
 			}
 		}
 		this.datasiswa=JSON.parse(JSON.stringify(resultArray));

 		console.log(this.datasiswa)
 	}

 	kirimabsensi(){
 		console.log(this.frmabsensi);
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
 				console.log(this.frmabsensi)
 				this.http.post(this.url2,JSON.stringify(this.frmabsensi),options).map(res => res.json())
 				.subscribe(data => {
 					let alert = this.alert.create({
 						title: 'Sukses',
 						subTitle: 'Absensi telah berhasil dikirim',
 						buttons: ['ok']
 					});
 					console.log("berhasil");
 					alert.present();
 					loader.dismiss();	 
 				})

 			})
 		})
 	}
 	

 }
