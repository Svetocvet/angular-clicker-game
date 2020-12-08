import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-player-name',
  templateUrl: './set-player-name.component.html',
  styleUrls: ['./set-player-name.component.scss']
})
export class SetPlayerNameComponent implements OnInit {
  constructor(public dataService: DataService) {
  }


  onFormChange(e): void {
    this.dataService.setNewPlayerName(e);
  }

  ngOnInit(): void {
  }
}
