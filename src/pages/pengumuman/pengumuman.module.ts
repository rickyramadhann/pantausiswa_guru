import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pengumuman } from './pengumuman';

@NgModule({
  declarations: [
    Pengumuman,
  ],
  imports: [
    IonicPageModule.forChild(Pengumuman),
  ],
})
export class PengumumanModule {}
