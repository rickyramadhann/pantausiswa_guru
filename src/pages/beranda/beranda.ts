import { Component } from '@angular/core';
import { NavController,App, PopoverController } from 'ionic-angular';
import { Absensi } from '../absensi/absensi';
import { Popover } from '../popover/popover';
import { Berita } from '../berita/berita';
import { Pengumuman } from '../pengumuman/pengumuman';
import { Jadwal } from '../jadwal/jadwal';
import { Tugas } from '../tugas/tugas';
import { Nilai } from '../nilai/nilai';

@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html'
})
export class Beranda {

  constructor(public navCtrl: NavController,public app:App, public popover:PopoverController) {

  }


  keabsensi(){
  	this.app.getRootNav().push(Absensi);
  }
  keberita(){
    this.app.getRootNav().push(Berita);
  }
  kepengumuman(){
    this.app.getRootNav().push(Pengumuman);
  }
  kejadwal(){
    this.app.getRootNav().push(Jadwal);
  }
  ketugas(){
    this.app.getRootNav().push(Tugas);
  }
  kenilai(){
    this.app.getRootNav().push(Nilai);
  }

  presentPopover(myEvent){
    let popoverr = this.popover.create(Popover);

    popoverr.present({
      ev:myEvent
    });
  }

}
