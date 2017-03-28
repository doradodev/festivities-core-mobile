import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Festivity } from '../../models/festivity.model';

import { FestivityService } from '../../services/festivity.service';

import { VerfestivityPage } from '../view/verFestivity';

import { CreateFestivityPage } from '../create/createFestivity';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  festivities:Festivity[];

  constructor(public navCtrl: NavController, private festivityService:FestivityService) {

  }

ngOnInit(){

   this.festivityService.getFestivities()
                         .subscribe(
                               festivities => this.festivities = festivities, 
                                err => {                                    
                                   console.log(err);
                                });

}

verFestivity(_festivity:Festivity){
    
    this.navCtrl.push(VerfestivityPage, {
      id: _festivity
    });
  }
createFestivity(){

  this.navCtrl.push(CreateFestivityPage);  

}


}
