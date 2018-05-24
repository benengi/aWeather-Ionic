import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('city')
      .then(value => {
        if (value) {
          this.city = value;
        } else {
          this.city = 'Esbjerg';
        }
      });
  }

  saveForm() {
    this.storage.set('city', this.city)
      .then(value => {
        this.city = value;
      });
  }
}
