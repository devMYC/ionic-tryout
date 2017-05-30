import { Component } from '@angular/core'
import {
  AlertController,
  ModalController,
  NavController
} from 'ionic-angular'

import { PeopleProvider } from '../../providers/people/people'
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  public people: Person[] = []
  public shouldReorder: boolean = false
  public shouldPushPage: boolean = true
  public swiped: boolean = false
  public slidingClicked: boolean = false

  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public service: PeopleProvider
  ) {
    this.service.getPeople()
      .subscribe(
        data => { this.people = data.results }
      )
  }

  public doInfinite(e: any): void {
    this.service.getPeople()
      .subscribe(
        data => this.people.push(...data.results),
        err => console.error(err),
        () => e.complete()
      )
  }

  public doRefresh(e: any): void {
    this.service.getPeople()
      .subscribe(
        data => this.people.unshift(...data.results),
        err => console.error(err),
        () => e.complete()
      )
  }

  public itemOnDelete(user: Person): void {
    this.slidingClicked = true
    const alert = this.alertCtrl.create({
      buttons: [
        {
          handler: () => { console.log('Canceled item delete') },
          role: 'cancel',
          text: 'Cancel',
        },
        {
          handler: () => {
            let i = 0
            for (const p of this.people) {
              if (p.id.value === user.id.value) {
                break
              }
              i++
            }

            this.people = [
              ...this.people.slice(0, i),
              ...this.people.slice(i + 1),
            ]
          },
          text: 'Delete',
        },
      ],
      message: `${user.name.first} ${user.name.last} will be deleted, are you sure you want to do this?`,
      title: 'Delete Contact?',
    })

    alert.present()
  }

  public itemOnDrag(e: any): void {
    if (e.getSlidingPercent() >= .5) {
      this.swiped = true
      this.shouldPushPage = false
    }
  }

  public pushPage(user: Person): void {
    if (!this.slidingClicked) {
      !this.shouldReorder
      && this.shouldPushPage
      && this.modalCtrl.create(DetailPage, user).present()

      if (this.swiped) {
        this.swiped = !this.swiped
        this.shouldPushPage = true
      }
      // this.shouldPushPage && this.navCtrl.push(DetailPage, user)
    } else {
      this.slidingClicked = !this.slidingClicked
    }
  }

  public toggleReorder(): void {
    this.shouldReorder = !this.shouldReorder
  }

}
