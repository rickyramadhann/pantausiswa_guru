import { Component } from '@angular/core';

import { Pesan } from '../pesan/pesan';
import { Profil } from '../profil/profil';
import { Beranda } from '../beranda/beranda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Beranda;
  tab2Root = Pesan;
  tab3Root = Profil;

  constructor() {

  }
}
