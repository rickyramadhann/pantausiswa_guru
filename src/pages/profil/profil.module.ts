import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profil } from './profil';

@NgModule({
  declarations: [
    Profil,
  ],
  imports: [
    IonicPageModule.forChild(Profil),
  ],
})
export class ProfilModule {}
