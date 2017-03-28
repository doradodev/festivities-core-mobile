import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { Festivity } from '../../models/festivity.model';
import { FestivityService} from '../../services/festivity.service';
import { HomePage } from '../home/home';

@Component({
  selector: 'create-festivity',
  templateUrl:'createFestivity.html' 
})
export class CreateFestivityPage {

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

  create(_festivity:Festivity){

    let confirm = this.alertCtrl.create({
      title: 'Create',
      message: 'are you sure create festivity?',
      buttons: [
        {
          text: 'yes',
          handler: () => {                   

            this.festivityService.createFestivity(_festivity)
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