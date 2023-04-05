import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  listObs:Observable<any>
  list:any = []

  constructor() {
    

   }
  public getList() {
    this.listObs = new Observable(list=>{
      list.next(this.list)
    })

    return this.listObs
   
  }

  lap(obj:any) {
    this.list.push(obj)

  }
}
