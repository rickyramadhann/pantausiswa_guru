import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Berita } from './berita';

@NgModule({
  declarations: [
    Berita,
  ],
  imports: [
    IonicPageModule.forChild(Berita),
  ],
})
export class BeritaModule {}
