import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {WeatherData} from '../../entities/WeatherData.entity';

@Injectable()
export class WeatherProvider {
  private url = 'http://api.openweathermap.org/data/2.5/$weather?q=Esbjerg';
  private apiKey: '&appid=f6ce3c4825db3516f814e63dfe5a5b69';

  constructor(private http: HttpClient) {
  }

  getWeather(city: string): WeatherData {
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Esbjerg&units=metric&appid=f6ce3c4825db3516f814e63dfe5a5b69');
    return {
      location: 'Esbjerg',
      weather: [
        {
          id: 1,
          main: 'Cloudy',
          description: 'Mostly Cloudy',
          icon: '123'
        }
      ],
      main: {
        temp: 21,
        temp_min: 18,
        temp_max: 22
      }
    }
  }

}
