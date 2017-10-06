import { Component,NgZone} from '@angular/core';
import { NavController, NavParams,
	MenuController, LoadingController, AlertController, Events} from 'ionic-angular';
	import {TabsPage} from '../tabs/tabs';
	import {Http, Headers} from '@angular/http';
	import 'rxjs/add/operator/toPromise';
	import 'rxjs/add/operator/map';
	import { Storage } from '@ionic/storage';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @Component({
 	selector: 'page-login',
 	templateUrl: 'login.html',
 })
 export class Login {

 	public user = {
 		email: '',
 		password: '',

 	};
 	public type= "password";
 	public showPass = false;
 	url:any='http://pantausiswa.xyz/api/guru/profil';
 	token:any;
 	dataguru:any;
 	photoside:any;
 	namaside:any;
 	id_guru:any;
 	tujuan:any;
 	constructor(public zone:NgZone,
 	 public navCtrl: NavController,
 		public navParams: NavParams, public menu:MenuController,
 		public http:Http, public loading: LoadingController,
 		public alert:AlertController, public storage: Storage, public events: Events
 		) {
 		this.storage.remove('token');
 		this.storage.clear();


 	}



 	login(){
 		if(this.user.email ===''||this.user.password===''){
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
 				this.http.post('http://pantausiswa.xyz/api/login',this.user)
 				.toPromise().then((response)=>{
 					if(response){

 						this.storage.remove('email');
 						this.storage.remove('token');
 						this.storage.set('token', response.json().token) ;
 						this.storage.set('email', this.user.email);

 						this.token = response.json().token;
 						this.events.publish('token:changed', this.token);
 						console.log(this.token)
 						let header = new Headers();
 						header.append('Content-Type', 'application/json');
 						header.append('Accept','Application/json');
 						header.append('Authorization', 'Bearer '+ this.token);
 						this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
 							console.log(datas);
 							this.namaside = datas.name;
 							this.photoside = datas.photo;
 							this.id_guru = datas.id;
 							this.events.publish('username:changed', this.namaside);
 							this.events.publish('photo:changed', this.photoside);
 							this.events.publish('idguru:changed', this.id_guru);
 							this.masuk({
 								name:this.namaside,
 								photo:this.photoside,
 								idguru:this.id_guru,
 							})
 							this.zone.run(()=>{  
 								this.events.publish('login');

 								this.navCtrl.setRoot(TabsPage)
 								this.navCtrl.popToRoot();
 							})
 						});
 					}
 					else{
 						let alert = this.alert.create({
 							title: "Oppps",
 							subTitle: 'email atau kata sandi tidak sesuai'
 						})
 						alert.present();
 					}
 					loader.dismiss();
 				},error=> {
 					let alert = this.alert.create({
 						title: 'warning',
 						subTitle: 'Email atau kata sandi tidak sesuai',
 						buttons: ['ok']
 					});
 					alert.present();
 					loader.dismiss();
 				});
 			});
 		}
 	}

 	masuk(data){
 		console.log('tes')
 	}

 	ionViewDidEnter(){
 		this.menu.swipeEnable(false,'menu1');
 	}

 	showPassword()
 	{
 		this.showPass = !this.showPass;
 		if (this.showPass){
 			this.type = "text";
 		}
 		else {
 			this.type = "password";
 		}
 	}


 	ngOnInit(){
 		this.events.subscribe('reload',()=>{

 			this.storage.clear();
 		})

 	}   

 }
