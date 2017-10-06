import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tugas } from './tugas';

@NgModule({
  declarations: [
    Tugas,
  ],
  imports: [
    IonicPageModule.forChild(Tugas),
  ],
})
export class TugasModule {}
