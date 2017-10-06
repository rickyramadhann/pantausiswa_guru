import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tambahtugas } from './tambahtugas';

@NgModule({
  declarations: [
    Tambahtugas,
  ],
  imports: [
    IonicPageModule.forChild(Tambahtugas),
  ],
})
export class TambahtugasModule {}
