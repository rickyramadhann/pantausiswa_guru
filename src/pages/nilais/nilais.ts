import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,  ViewController, AlertController, LoadingController, Slides} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import * as moment from 'moment';
/**
 * Generated class for the Nilaip page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-nilais',
 	templateUrl: 'nilais.html',
 })
 export class Nilais {
 	@ViewChild(Slides) slides: Slides;
 	token : any;
 	datatugas:any;
 	url:any='http://pantausiswa.xyz/api/guru/kelasngajar';
 	url2:any='http://pantausiswa.xyz/api/guru/nilaipengetahuan';

 	page:number=2;
 	tanggal:any;
 	jam:any;
 	kelas:any;
 	matpel:any;
 	kode:any;
 	kompetensi:any[]=[];
 	jns_kompetensi:any;
 	x:any;
 	y:any;
 	siswa:any;
 	idsiswa:any[]=[];
 	public frmnilais = {
 		kelas: '',
 		checkbox:this.idsiswa,
 		matpel: '',
 		nilai:[],
 		kategori:'',
 		kkm:0,
 		kode:'',

 	};
 	constructor(public http:Http, public storage:Storage, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public alert:AlertController, public loading:LoadingController) {
 		let jenis = navParams.get('jenis');
 		this.jns_kompetensi =jenis;
 		console.log(this.jns_kompetensi);
 	}

 	ionViewDidLoad() {
 		this.slides.lockSwipes(true);
 		this.storage.get('token').then(token=>{
 			this.token=token;
 			let header = new Headers();
 			header.append('Content-Type', 'application/json');
 			header.append('Accept','Application/json');
 			header.append('Authorization', 'Bearer '+ this.token);

 			this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
 				this.kelas = datas.kelas;
 				this.matpel = datas.matpel;
 				this.kode =datas.kode;
 				this.siswa = datas.siswa;
 				for(let i=0; i<this.siswa.length;i++){
 					this.idsiswa.push(this.siswa[i].id);
 				}
 			})

 		})
 	}

 	slideNext(){
 		var resultArray:Array<any>=[] 
 		this.slides.lockSwipes(false);
 		this.slides.slideNext();
 		console.log(this.frmnilais);
 		for(let i =0; i<this.kode.length;i++){
 			if(this.kode[i].id_matpel ==  this.frmnilais.matpel){
 				if(this.kode[i].jns_kompetensi == this.jns_kompetensi){
 					resultArray.push({
 						"kode":this.kode[i].kode,
 						"kode_kompetensi":this.kode[i].kode_kompetensi
 					})
 				}
 			}
 		}
 		this.x=JSON.parse(JSON.stringify(resultArray));

 		console.log(this.x)

 		this.slides.lockSwipes(true);

 	}

 	lanjut(){
 		var resultArray:Array<any>=[] 
 		this.slides.lockSwipes(false);
 		this.slides.slideNext();
 		for(let i =0; i<this.siswa.length;i++){
 			if(this.siswa[i].id_kelas ==  this.frmnilais.kelas){
 				resultArray.push({
 					"id":this.siswa[i].id,
 					"name":this.siswa[i].name
 				})
 				
 			}
 		}
 		this.y=JSON.parse(JSON.stringify(resultArray));

 		console.log(this.y)
 		this.slides.lockSwipes(true);
 	}

 	kirim(){
 		console.log(this.frmnilais);
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
 				console.log(this.frmnilais)
 				this.http.post(this.url2,JSON.stringify(this.frmnilais),options).map(res => res.json())
 				.subscribe(data => {
 					let alert = this.alert.create({
 						title: 'Sukses',
 						subTitle: 'Nilai telah berhasil dikirim',
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
