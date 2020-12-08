import {Component, Input, NgModule, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {timer} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

// https://www.codegrepper.com/code-examples/javascript/write+to+a+json+file+using+typescript
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() disabled: boolean;

  // tslint:disable-next-line:variable-name
  constructor(public dataService: DataService, private _snackBar: MatSnackBar) {
  }

  isTimerStarted = false;
  interval;
  timeInterval = 5;
  tempInterval = 0;
  intervals: number[] = [5, 10, 15];
  score = 0;

  startTimer(): void {
    this.disabled = true;
    this.tempInterval = this.timeInterval;
    this.isTimerStarted = true;
    this.score = 0;
    this.interval = setInterval(() => {
      if (this.timeInterval > 0) {

        this.timeInterval--;

      } else {
        this.openSnackBar(`Name: ${this.dataService.playerName} Time: ${this.tempInterval} Score: ${this.score}`);
        this.dataService.setNewRecord(this.dataService.playerName, this.tempInterval, this.score);
        clearInterval(this.interval);
        this.timeInterval = 5;
        this.disabled = false;
        this.isTimerStarted = false;
      }
    }, 1000);
  }

  startGame(): void {
    if (!this.isTimerStarted) {
      this.startTimer();
    }
    if (this.timeInterval > 0) {
      this.score = this.score + 1;
    }
  }

  ngOnInit(): void {
    console.log(this.dataService.playerName);
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Great!', {
      duration: 4000,
    });
  }
}
