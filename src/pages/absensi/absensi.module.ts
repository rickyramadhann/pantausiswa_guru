import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Absensi } from './absensi';

@NgModule({
  declarations: [
    Absensi,
  ],
  imports: [
    IonicPageModule.forChild(Absensi),
  ],
})
export class AbsensiModule {}
