import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private timerService:TimerService){
    this.list = this.timerService.list
  }
  title = 'project';
  type:string = ''
  list:any

  ngOnInit() {
  }

  setType(type:string) {
    this.type = type
    console.log(type)
  }
  
}
