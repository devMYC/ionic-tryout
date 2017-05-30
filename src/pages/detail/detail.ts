import { Component } from '@angular/core'
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular'

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public user: Person = this.navParams.data

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  public ionViewDidLoad(): void {
    return
  }

  public dismiss(): void {
    this.viewCtrl.dismiss()
  }

}
