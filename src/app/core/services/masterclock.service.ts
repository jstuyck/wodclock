import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { ClockStateModel, ClockStatus } from '../models/clocksate.model';

@Injectable({
  providedIn: 'root'
})
export class MasterclockService {
  private clockSource = timer(500,500);

  private subClockState = new BehaviorSubject<ClockStateModel>({} as ClockStateModel);
  public clockstate$ : Observable<ClockStateModel>;
  
  constructor() { 
    this.clockstate$ = this.subClockState.asObservable();

    this.clockSource.subscribe(() => {
      this.cycle();
    })
  }

  public start() 
  {
    let state = this.subClockState.value;
    state = { ...state, status: ClockStatus.start}
    this.subClockState.next(state);
  }

  private cycle() {
    let state = this.subClockState.value;
    state.masterclock = moment().format();
    this.subClockState.next(state);
  }
}
