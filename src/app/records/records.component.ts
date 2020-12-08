import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  displayedColumns: string[] = ['user', 'clicks', 'clicksPerSecond'];

  fiveSeconds = this.dataService.recordStatsFiveSeconds;
  tenSeconds = this.dataService.recordStatsTenSeconds;
  fifteenSeconds = this.dataService.recordStatsFifteenSeconds;


  ngOnInit(): void {
  }

}
