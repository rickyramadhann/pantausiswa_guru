import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,Slides } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AppMinimize } from '@ionic-native/app-minimize';
import { TruncatePipe } from 'angular2-truncate';
import { FormsModule }   from '@angular/forms';
import { ElasticModule } from 'angular2-elastic';

import { Moment } from '../pipes/moment';



import { Berita } from '../pages/berita/berita';
import { Bacaberita } from '../pages/bacaberita/bacaberita';
import { Pengumuman } from '../pages/pengumuman/pengumuman';
import { Bacapengumuman } from '../pages/bacapengumuman/bacapengumuman';
import { Jadwal } from '../pages/jadwal/jadwal';
import { Tugas } from '../pages/tugas/tugas';
import { Popover } from '../pages/popover/popover';
import { Tambahtugas } from '../pages/tambahtugas/tambahtugas';
import { Nilai } from '../pages/nilai/nilai';
import { Nilaip } from '../pages/nilaip/nilaip';

import { Absensi } from '../pages/absensi/absensi';
import { Pesan } from '../pages/pesan/pesan';
import { Profil } from '../pages/profil/profil';
import { Beranda } from '../pages/beranda/beranda';
import { Login } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
    MyApp,
    Pesan,
    Profil,
    Beranda,
    TabsPage,
    Absensi,
    Berita,
    Login,
    Bacaberita,
    Pengumuman,
    Bacapengumuman,
    Jadwal,
    Moment,
    TruncatePipe,
    Tugas,
    Popover,
    Tambahtugas,
    Nilai,
    Nilaip,
    ],
    imports: [
    BrowserModule, HttpModule,FormsModule,
    ElasticModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    Pesan,
    Profil,
    Beranda,
    TabsPage,
    Absensi,
    Berita,
    Login,
    Jadwal,
    Bacaberita,
    Pengumuman,
    Bacapengumuman,
    Tugas,
    Popover,
    Tambahtugas,
    Nilai,
    Nilaip,
    ],
    providers: [
    StatusBar,
    SplashScreen,Slides,
    Calendar,BackgroundMode,AppMinimize,LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
