import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionConverter'
})
export class DescriptionConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

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

    return null;
  }

}
