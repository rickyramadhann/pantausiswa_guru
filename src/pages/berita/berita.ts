import { Component } from '@angular/core';
import { NavController,MenuController,App,LoadingController,AlertController, Platform } from 'ionic-angular';
import { Bacaberita } from '../bacaberita/bacaberita';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class Berita {

  token : any;
  databerita = [];
  url:any='http://pantausiswa.xyz/api/berita';
  page:number=2;
  key=[];
  splash = true;
  tabBar:any;
//  private pusher: any;
  status:any;
  idsiswa:any;
  idortu:any;
  idkelas:any;
  tujuan:any;
  bpengumuman:any;
  blaporan:any;
  bcatatan:any;
  notificationAlreadyReceived = false;
  photoside:any;
  akses:any;
  
  constructor(public backgroundMode: BackgroundMode,public navCtrl: NavController,public app:App,
    public menu:MenuController, public http:Http, public alert:AlertController, public platform:Platform,
    public loader:LoadingController, public storage: Storage) {


  }


  


  loadBerita(page){
    return new Promise(resolve=>{
      this.storage.get('token').then(token=>{
        this.token=token;
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Accept','Application/json');
        header.append('Authorization', 'Bearer '+ this.token);
        this.http.get(this.url + '?page='+ this.page, {headers:header}).map(res=>res.json()).subscribe(data=>{
          resolve(data.data);

        });
      });
    });
  }

  loadmore(infiniteScroll){
    this.loadBerita(this.page).then(items=>{
      let length = items["length"];

      if(length===0){
        infiniteScroll.complete();
        return;
      }
      if(length){        
        this.page++;
      }
      for(var i =length-1; i>=0;i--){
        this.databerita.push(items[i]);
      }
      infiniteScroll.complete();
    });
  }


  kebacaberita(data){
    console.log(data);
    this.app.getRootNav().push(Bacaberita,data);

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.page = 1  ;
    this.ionViewDidEnter();
    this.page++;

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidEnter(){
    this.storage.get('token').then(token=>{
      this.token=token;
      let header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept','Application/json');
      header.append('Authorization', 'Bearer '+ this.token);

      this.http.get(this.url, {headers:header} ).map(res => res.json()).subscribe(datas =>{
        if(datas){
          this.databerita = datas.data;
        }
      }, error=> {
        let alert = this.alert.create({
          title: 'Error',
          subTitle: 'Tidak Ada Koneksi Internet',
          buttons: ['OK']
        });
        alert.present();
      });  
    })

  }
}
