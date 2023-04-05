import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value:string | undefined): string | undefined {

  let str = value?.match(/\d+/g);

  let time = str?.map((item:any)=> {
    if (+item.length === 1) return `0${item}`
    else return item
  })
  
  value = time?.join(':')
  return value
  }
}
