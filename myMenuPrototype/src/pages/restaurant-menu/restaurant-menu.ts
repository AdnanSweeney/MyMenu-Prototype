import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { MenuItem } from '../../models/menuItem';

import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the RestaurantMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-restaurant-menu',
  templateUrl: 'restaurant-menu.html'
})
export class RestaurantMenuPage {
  user: User;
  login: string;
  food: string="Appetizers"
  appetizers: MenuItem[];
  entrees: MenuItem[];
  desserts: MenuItem[];

   constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
      
      this.appetizers = [ 
        
        new MenuItem('Calamari',
                     'https://goo.gl/DwQYjR',
                     [1,2,3,4],35,9.99,['Batter', 'Squid', 'Lemon', 'Ranch Sauce']),

        new MenuItem('Caesar Salad',
                     'https://goo.gl/Zx4RjV',
                     [1,2,3],24,7.99,['Iceberg Lettuce', 'Romaine Lettuce', 'Croutons', 'Bacon', 'Caesar Dressing']),
          
        new MenuItem('Chicken Wings',
                     'https://goo.gl/KDAHWR',
                     [1,2,3,4, 5],66,7.99,['Chicken Wings', 'Buffalo Sauce', 'Celery', 'Ranch Dipping Sauce']),
          
        new MenuItem('Nachos Supreme',
                     'https://goo.gl/anhb1W',
                     [1,2,3,4],28,10.99,['Corn Chips', 'Black Olives', 'Tomatoes', 'Onions', 'Jalepenos', 'Sour Cream']),

        new MenuItem('Garlic Shrimp',
                     'https://goo.gl/7MVqNA',
                     [1,2,3,4],35,9.99,['Garlic', 'Shrimp', 'Tomato', 'Shrimp Sauce'])

      ]   

      this.entrees = [

        new MenuItem('Angus Burger',
                     'https://goo.gl/UWyX4T',
                     [1,2,3,4],35,9.99,['Lettuce', 'Red Onion', 'Tomato', 'Burger Sauce', '100% Angus Beef']),

        new MenuItem('Fish and Chips',
                     'https://goo.gl/YqROzV',
                     [1,2,3],24,7.99,['Eggs', 'Flour', 'Skim Milk', 'Fried Haddock', 'Potatoes']),
          
        new MenuItem('Chicken Tenders',
                     'https://goo.gl/nbB4SC',
                     [1,2,3,4, 5],66,7.99,['Flour', 'Eggs', 'Skim Milk', 'Chicken Breast Strips', 'Ranch Dipping Sauce']),
          
        new MenuItem('Grilled Salmon',
                     'https://goo.gl/qmxotc',
                     [1,2,3,4],28,10.99,['Basil', 'Oregano', 'Salmon', 'Onions', 'Lemon', 'Asparagus']),

        new MenuItem('Sirloin Steak',
                     'https://goo.gl/bz2Uoh',
                     [1,2,3,4],35,9.99,['BBQ Sauce', 'AAA Prime Canadian Beef', 'Black Peppercorns', 'Cream Sauce'])

      ]  

      this.desserts = [

        new MenuItem('Ice Cream Sundae',
                     'https://goo.gl/4661Jl',
                     [1,2,3,4],35,9.99,['Ice Cream', 'Chocolate Sauce', 'Pecans', 'Banana', '100% Angus Beef']),

        new MenuItem('Apple Pie',
                     'https://goo.gl/SzMOEU',
                     [1,2,3],24,7.99,['Eggs', 'Flour', 'Red Apple', 'Caramel', 'Maple Syrup']),
          
        new MenuItem('Chocolate Fudge Cake',
                     'https://goo.gl/yujTpg',
                     [1,2,3,4, 5],66,7.99,['Flour', 'Eggs', 'Skim Milk', 'Sugar', 'Chocolate Icing']),
          
        new MenuItem('Classic Cheesecake',
                     'https://goo.gl/uBlznq',
                     [1,2,3,4],28,10.99,['Cream Cheese', 'Graham Crackers', 'Sugar', 'Strawberry']),

      ]                                           



    })
  }
}