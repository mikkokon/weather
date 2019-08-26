class WeatherDataController {

    private town: string = 'Kaarina';

    async getWeatherData() {
        let response;

        try {
          //https://codecraft.tv/courses/angular/es6-typescript/promises/
          console.log("this.town:", this.town)
          response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.town}&key=18cf017f00ca44649c20db65aa45b734`)
          console.log("response: ", response)
          console.log("response type: ", typeof(response))
          if (response.statusText === 'No Content') {
              throw new Error(response.statusText);
          }
        }

        catch(err) {
           console.log("err: ", err);
           console.log("err.message: ", err.message);
           return Promise.reject(err.message);
        }

        let weatherData = response.json();
        return (weatherData)
    }

    setTown(town: string) {
        this.town = town;
    }

}


export const weatherData = new WeatherDataController()
