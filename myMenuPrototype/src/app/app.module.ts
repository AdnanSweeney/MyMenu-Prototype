import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { RestaurantMenuPage } from '../pages/restaurant-menu/restaurant-menu';
import { MenuItemDetailsPage } from '../pages/menu-item-details/menu-item-details';

import { GithubUsers } from '../providers/github-users';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RestaurantsPage,
    RestaurantMenuPage,
    MenuItemDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RestaurantsPage,
    RestaurantMenuPage,
    MenuItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GithubUsers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
