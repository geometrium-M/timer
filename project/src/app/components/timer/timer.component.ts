import { Component, Input } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  minutes:number = 0
  seconds:number = 0
  milliseconds:number = 0
  private unsub = new Subject<void>();

  @Input() type = ''

  
  timer = timer(0,10)  
    .pipe(takeUntil(this.unsub))

  list:any

  overallTime:any
  lapMinutes:number = 0
  lapSeconds:number = 0
  lapMilliseconds:number = 0
  stopTimer:string


  lapShow:boolean = false

  startBtn = true
  stopBtn = false

    constructor(private timerService:TimerService) {
      this.timerService.getList().subscribe(list=>this.list = list)


    }

  
  start() {
    this.startBtn = false
    this.stopBtn = true
    this.timer?.subscribe(()=>{
      this.milliseconds++  

      if (this.milliseconds > 99) {
        this.milliseconds = 0
        this.seconds++  
      }

      if(this.seconds > 59) {
        this.minutes++
        this.seconds = 0
      }

      if(this.minutes == 60) {
        this.unsub.next()
      }
    })    
  }

  stop() {
    this.stopBtn = false
    this.unsub.next()
  }

  reset() {
    this.milliseconds = 0
    this.seconds = 0
    this.minutes = 0
  }

  lap() {
    let obj = {
      lap:`${this.lapMinutes}:${this.lapSeconds}:${this.lapMilliseconds}`,
      overall:`${this.minutes}:${this.seconds}:${this.milliseconds}`

    }

    this.timerService.lap(obj)
    
      this.lapShow = true
    
    this.lapMilliseconds = 0
    this.lapSeconds = 0
    this.lapMinutes = 0

    this.timer.subscribe(()=>{
      this.lapMilliseconds++
      if (this.lapMilliseconds > 99) {
        this.lapMilliseconds = 0
        this.lapSeconds++  
      }

      if(this.lapSeconds > 59) {
        this.lapMinutes++
        this.lapSeconds = 0
      }

      if(this.lapMinutes == 60) {
        this.unsub.next()
      }
    })
    
    console.log(this.list)
  }
}
