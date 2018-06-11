import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OAuthService } from 'angular-oauth2-oidc'

@Component({
  selector: 'fachada',
  templateUrl: './fachada.component.html',
  styleUrls: ['./fachada.component.css']
})
export class FachadaComponent implements OnInit {
  public forecasts: WeatherForecast[];

  constructor(private http:Http,
              @Inject('BASE_URL') private baseUrl: string,
              private oauthService: OAuthService) { }

  ngOnInit(): void {
    var headers = new Headers({
      "Authorization": "Bearer " + this.oauthService.getAccessToken()
    });
    this.http.get(this.baseUrl + 'api/SampleData/WeatherForecasts',
                  {headers:headers})
                  .subscribe(result =>{
                    this.forecasts = result.json() as WeatherForecast[];
                  },error => console.error(error));
  }

}

interface WeatherForecast{
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  sumary: string;
}
