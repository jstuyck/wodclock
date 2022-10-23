import { Component, OnInit } from '@angular/core';
import { ClockStateModel } from './core/models/clocksate.model';
import { MasterclockService } from './core/services/masterclock.service';
import { CommandModel } from './models/command.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public clockSate: ClockStateModel;

    constructor(private clock: MasterclockService){
      clock.clockstate$.subscribe((res) => {
        this.clockSate = res;       
      })
    }    
}
