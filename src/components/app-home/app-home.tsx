import { Component, h } from '@stencil/core';
import { weatherData } from '../../services/weather-data-service'

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  private submitValue: any;
  private data: any;

  async componentDidLoad() {
    // Tähän get paikkakunta storagesta
     weatherData.setTown('Kaarina');

     try {
        this.data = await weatherData.getWeatherData();
        console.log("tulosOrig: ", this.data)
     }
     catch(err) {
        console.log("err in app-home: ", err)
     }
  }


  async handleInput(submitValue) {
    await weatherData.setTown(submitValue);
    this.data = await weatherData.getWeatherData();
    console.log("this.data: ", this.data)
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
            Anna paikkakunta
        </p>
        <ion-item>
            <ion-label></ion-label>
            <ion-input
                value={''}
                type="text"
                onIonInput={(ev: any) => {
                  this.submitValue = ev.target.value;
                }}
            />
            <ion-button onClick={() => this.handleInput(this.submitValue)}>Save</ion-button>
          </ion-item>

      </ion-content>
    ];
  }
}
