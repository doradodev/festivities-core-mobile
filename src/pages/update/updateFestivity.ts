import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { Festivity } from '../../models/festivity.model';
import { FestivityService} from '../../services/festivity.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'update-festivity',
  templateUrl:'updateFestivity.html' 
})
export class UpdateFestivityPage {

    festivity: Festivity;
    festivityNew = {
        id :'',
        name:'',
        place:'',
        start:'',
        end:''
    };    

  constructor (private navParams: NavParams, 
               public navCtrl: NavController,
               private festivityService: FestivityService,
               public alertCtrl: AlertController
               ){

    console.log("entre a updatefestivityPage");
    this.festivity = navParams.get('id');
  } 

  update(_festivity:Festivity){

    let confirm = this.alertCtrl.create({
      title: 'Update',
      message: 'are you sure update festivity?',
      buttons: [
        {
          text: 'yes',
          handler: () => {
             _festivity.id = this.festivity.id;      

            this.festivityService.updateFestivity(_festivity)
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