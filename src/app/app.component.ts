import { Component, OnInit } from '@angular/core';
import { CommandModel } from './models/command.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  commands: CommandModel[];
  isRunning: Boolean = false;
  mode: string;
  min: number;
  sec: number;
  intervalHandler: number;


  ngOnInit() {
    this.min = 2;
    this.sec = 0;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalHandler = window.setInterval((res) => {
        this.tick();
      }, 1000);
    }
  }

  stop() {
    window.clearInterval(this.intervalHandler);
    this.isRunning = false;
  }

  tick() {
    if (this.sec === 0) {
      if (this.min === 0) {
        this.stop();
      } else {
        this.min -= 1;
        this.sec = 59;
      }
    } else {
      this.sec -= 1;
    }
  }

  reset () {
    this.stop();
    this.min = 2;
    this.sec = 0;
  }

  clock() {
    this.stop();
    this.intervalHandler = window.setInterval((res) => {
      const d = new Date();
      this.min = d.getHours();
      this.sec = d.getMinutes();
    }, 1000);
  }

  startFGB() {
    this.countDown(10);
  }

  countDown(interval: number) {
    //1
  }
}
