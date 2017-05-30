import { ErrorHandler, NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { DetailPage } from '../pages/detail/detail'
import { HomePage } from '../pages/home/home'
import { PeopleProvider } from '../providers/people/people'
import { MyApp } from './app.component'

@NgModule({
  bootstrap: [ IonicApp ],
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
  ],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PeopleProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
