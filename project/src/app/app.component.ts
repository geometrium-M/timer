import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  ngOnInit() {
    const obj = interval(1000)

    obj.subscribe((d)=>{
      console.log(d)
    })

  }
  
}
