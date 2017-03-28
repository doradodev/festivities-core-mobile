import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';

import { Festivity } from '../../models/festivity.model';
import { UpdateFestivityPage } from '../update/updateFestivity';
import { HomePage } from '../home/home';

import { FestivityService} from '../../services/festivity.service';

@Component({
  selector: 'ver-festivity',
  templateUrl:'verFestivity.html' 
})
export class VerfestivityPage {

    festivity = {};

  constructor (private navParams: NavParams, 
               public navCtrl: NavController,
               private festivityService: FestivityService,
               public alertCtrl: AlertController ){
      console.log("entre a VerfestivityPage");
    this.festivity = navParams.get('id');
  }

  updateFestivity(_festivity:Festivity){
  console.log("entre a updatefestivity home.ts");
    this.navCtrl.push(UpdateFestivityPage, {
      id: _festivity
    });
  }

  removeFestivity(_festivity:Festivity){

    let confirm = this.alertCtrl.create({
      title: 'Delete',
      message: 'are you sure delete festivity?',
      buttons: [
        {
          text: 'yes',
          handler: () => {
            this.festivityService.removeFestivity(_festivity.id)
                          .subscribe(
                                      result => console.log(result),
                                      err => {
                                      console.log(err);
                                }
                            );
             this.navCtrl.push(HomePage);               
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();    

  }

 
}

