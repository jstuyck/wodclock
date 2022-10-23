import * as moment from 'moment';

export class ClockStateModel {
    public masterclock: string;
    public status: ClockStatus = ClockStatus.stop;
}

export enum ClockStatus {
    start,
    stop,
    pause
}