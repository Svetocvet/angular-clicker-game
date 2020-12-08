import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  playerName = this.storage.get('playerName') || 'Player';
  recordStatsFiveSeconds = this.storage.get('recordStatsFiveSeconds') || [
    {user: 'svtcvt', clicks: 50, clicksPerSecond: 10},
    {user: 'Player', clicks: 44, clicksPerSecond: 8.8},
    {user: 'test', clicks: 32, clicksPerSecond: 6.4},
    {user: 'Player', clicks: 1, clicksPerSecond: 0.2},
    {user: 'Player', clicks: 0, clicksPerSecond: 0},
  ];
  recordStatsTenSeconds = this.storage.get('recordStatsTenSeconds') || [
    {user: 'svtcvt', clicks: 114, clicksPerSecond: 11.4},
    {user: 'Player', clicks: 81, clicksPerSecond: 8.1},
    {user: 'Player', clicks: 62, clicksPerSecond: 6.2},
    {user: 'Player', clicks: 1, clicksPerSecond: 0.1},
    {user: 'Player', clicks: 0, clicksPerSecond: 0},
  ];
  recordStatsFifteenSeconds = this.storage.get('recordStatsFifteenSeconds') || [
    {user: 'svtcvt', clicks: 187, clicksPerSecond: 12.5},
    {user: 'Player', clicks: 104, clicksPerSecond: 6.9},
    {user: 'test', clicks: 15, clicksPerSecond: 1},
    {user: 'Player', clicks: 1, clicksPerSecond: 0},
    {user: 'Player', clicks: 0, clicksPerSecond: 0},
  ];

  setNewPlayerName(playerName: string): void {
    this.playerName = playerName;
    this.storage.set('playerName', this.playerName);
  }

  setNewRecord(playerName: string, time: number, amountOfClicks: number): void {
    const newRecord: IRecord = {user: playerName, clicks: amountOfClicks, clicksPerSecond: parseFloat((amountOfClicks / time).toFixed(2))};

    for (let i = 0; i < 5; i++) {
      if (time === 5) {

        if (newRecord.clicks > this.recordStatsFiveSeconds[i].clicks) {
          this.recordStatsFiveSeconds[i] = newRecord;
          this.storage.set('recordStatsFiveSeconds', this.recordStatsFiveSeconds);
          break;
        }
      } else if (time === 10) {
        if (newRecord.clicks > this.recordStatsTenSeconds[i].clicks) {
          this.recordStatsTenSeconds[i] = newRecord;
          this.storage.set('recordStatsTenSeconds', this.recordStatsTenSeconds);
          break;
        }
      } else {
        if (newRecord.clicks > this.recordStatsFifteenSeconds[i].clicks) {
          this.recordStatsFifteenSeconds[i] = newRecord;
          this.storage.set('recordStatsFifteenSeconds', this.recordStatsFifteenSeconds);
          break;
        }
      }


    }
  }
}

interface IRecord {
  user: string;
  clicks: number;
  clicksPerSecond: number;
}
