import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,App} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

//import { Notifikasi } from '../notifikasi/notifikasi';
import { Bacapengumuman } from '../bacapengumuman/bacapengumuman';
/**
 * Generated class for the Pengumuman page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-pengumuman',
   templateUrl: 'pengumuman.html',
 })
 export class Pengumuman {

   token : any;
   datapengumuman:any;
   url:any='http://pantausiswa.xyz/api/guru/pengumumans';
   page:number=1;
   key=[];
   constructor(public navCtrl: NavController,public app:App,  public navParams: NavParams, public menu:MenuController, public storage:Storage,public http:Http) {


   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Pengumuman');
   }

   // kenotifikasi(){
     //   this.app.getRootNav().push(Notifikasi);

     // }

     kebacapengumuman(datapengumuman){
       console.log(datapengumuman);
       this.app.getRootNav().push(Bacapengumuman,datapengumuman);

     }


     ionViewDidEnter(page){
       this.menu.swipeEnable(true,'menu1');
       this.storage.get('token').then(token=>{
         this.token=token;
         let header = new Headers();
         header.append('Content-Type', 'application/json');
         header.append('Accept','Application/json');
         header.append('Authorization', 'Bearer '+ this.token);

         this.http.get(this.url + '?page='+ this.page, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.datapengumuman = datas.data;
           this.key = Object.keys(this.datapengumuman);
           console.log(this.key);

         })

       })
     }

     loadpengumuman(){
       this.storage.get('token').then(token=>{
         this.token=token;
         let header = new Headers();
         header.append('Content-Type', 'application/json');
         header.append('Accept','Application/json');
         header.append('Authorization', 'Bearer '+ this.token);

         this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.datapengumuman = datas.data;
           this.key = Object.keys(this.datapengumuman);
           console.log(this.key);

         })

       })
     }
     doRefresh(refresher) {
       console.log('Begin async operation', refresher);
       this.loadpengumuman();
       setTimeout(() => {
         console.log('Async operation has ended');
         refresher.complete();
       }, 2000);
     }

   }
