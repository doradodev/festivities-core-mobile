import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { CreateFestivityPage } from '../pages/create/createFestivity';
import { HomePage } from '../pages/home/home';
import { UpdateFestivityPage } from '../pages/update/updateFestivity';
import { VerfestivityPage } from '../pages/view/verFestivity';


//services
import { FestivityService } from '../services/festivity.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VerfestivityPage,
    UpdateFestivityPage,
    CreateFestivityPage
    
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VerfestivityPage,
    UpdateFestivityPage,
    CreateFestivityPage    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FestivityService
  ]
})
export class AppModule {}
