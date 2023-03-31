import { Component } from '@angular/core';
import { interval, Observable, Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  minutes:number = 0
  seconds:number = 0
  milliseconds:number = 0

  stop = new Subject()

  timer:Observable<any> | undefined

  ngOnInit() {
    this.timer = timer(100,100)  
    .pipe(takeUntil(this.stop))
    }
 
    
    start() {
      this.timer?.subscribe((val)=>{
        this.milliseconds = val

        if(this.milliseconds === 10) {
    
          val.next(0)
          

        }
      })
    }

  
   
    
  
    

}
