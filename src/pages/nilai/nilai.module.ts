import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Nilai } from './nilai';

@NgModule({
  declarations: [
    Nilai,
  ],
  imports: [
    IonicPageModule.forChild(Nilai),
  ],
})
export class NilaiModule {}
