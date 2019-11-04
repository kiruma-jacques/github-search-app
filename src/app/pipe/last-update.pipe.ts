import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastUpdate'
})
export class LastUpdatePipe implements PipeTransform {

  // transform(value: any): number {
  //   let today: Date = new Date();
  //   let dayWithNoTime: any = new Date (today.getFullYear(), today.getMonth(), today.getDate())
  //   var difference = Math.abs(value - dayWithNoTime)
  //   const secondsperDay = 86400;
  //   var dateDifference = difference*0.001;
  //   var dateCounter = Math.floor(dateDifference/secondsperDay);
    
  //   if (dateCounter >= 1 && value > dayWithNoTime){
  //     return 0;
  //   } else {
  //     return dateCounter;
  //   }
  // }

  
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        return 'Just now';
      }
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return 'a' + ' ' + i + ' ago'; 
          } else {
            return counter + ' ' + i + 's ago';
          }
        }
      }
    }
    return value;
  }


}
