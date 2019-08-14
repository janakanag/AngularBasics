import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionConverter'
})
export class DescriptionConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    /* due to a limitation in stackblitz, the image paths are directly
    linked to github URLs. Uncomment and use the following block if not
    running via Stackblitz
    https://github.com/stackblitz/core/issues/72
    /*
    if (value == 'Sunny')
      return 'assets/sunny.jpg';
    else if (value == 'Partially sunny')
        return 'assets/cloudy.jpg';
    else if (value == 'Rain')
        return 'assets/rain.jpg';
    else if (value == 'Thunder')
        return 'assets/thunder.jpg';
    else if (value == 'Intermittent')
        return 'assets/intermittent.jpg';
  */

  if (value == 'Sunny')
    return 'https://github.com/janakanag/AngularBasics/blob/master/WeatherForecast/src/assets/sunny.jpg?raw=true';
  else if (value == 'Partially sunny')
    return 'https://github.com/janakanag/AngularBasics/blob/master/WeatherForecast/src/assets/cloudy.jpg?raw=true';
  else if (value == 'Rain')
    return 'https://github.com/janakanag/AngularBasics/blob/master/WeatherForecast/src/assets/rain.jpg?raw=true';
  else if (value == 'Thunder')
    return 'https://github.com/janakanag/AngularBasics/blob/master/WeatherForecast/src/assets/thunder.jpg?raw=true';
  else if (value == 'Intermittent')
    return 'https://github.com/janakanag/AngularBasics/blob/master/WeatherForecast/src/assets/intermittent.jpg?raw=true';


    return null;
  }

}
