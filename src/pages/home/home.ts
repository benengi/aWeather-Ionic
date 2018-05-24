import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {WeatherData} from '../../entities/WeatherData.entity';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData: WeatherData;
  city: string;

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider,
              private storage: Storage) {
  }

  ionViewWillEnter() {
    this.storage.get('city')
      .then(value => {

        if (value) {
          this.city = value;
        } else {
          this.city = 'Esbjerg'
        }

        this.weatherData = this.weatherProvider.getWeather(this.city);
      });
  }

}
