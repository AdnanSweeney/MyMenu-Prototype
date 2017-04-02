import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MenuItem } from '../../models/menuItem';

/*
  Generated class for the MenuItemDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-item-details',
  templateUrl: 'menu-item-details.html'
})
export class MenuItemDetailsPage {
  menuItem: MenuItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.menuItem = navParams.get('menuItem');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemDetailsPage');
  }

}
