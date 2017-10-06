import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,PopoverController } from 'ionic-angular';
import { Popover } from '../popover/popover';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

/**
 * Generated class for the Profil page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-profil',
 	templateUrl: 'profil.html',
 })
 export class Profil {
   token : any;
   dataguru = [];
   url:any='http://pantausiswa.xyz/api/guru/profil';
   tgl_lahir:any;
   email:any;
   nama:any;
   nip:any;
   alamat:any;
   telp:any;
   photo:any;
   constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public http:Http,public menu:MenuController, public popover:PopoverController) {
     this.check();
   }


   presentPopover(myEvent){
     let popoverr = this.popover.create(Popover);

     popoverr.present({
       ev:myEvent
     });
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Profil');
   }
   ionViewDidEnter(){
     this.menu.swipeEnable(false,'menu1');
   }

   check(){
     this.storage.get("token").then((token)=>{
       if(token){
         this.token=token;
         let header = new Headers();
         header.append('Content-Type', 'application/json');
         header.append('Accept','Application/json');
         header.append('Authorization', 'Bearer '+ this.token);
         this.http.get(this.url, {headers:header}).map(res=>res.json()).subscribe(datas=>{
           this.tgl_lahir= moment(datas.tgl_lahir).locale('id').format('l');
           this.nama = datas[0].name;
           this.photo = datas[0].photo;
           this.nip = datas[0].nip;
           this.alamat = datas[0].alamat;
           this.telp = datas[0].telp;
           this.storage.get('email').then((v)=>{
             this.email = v;
           })

         });
       }
     });
     
   }
 }
