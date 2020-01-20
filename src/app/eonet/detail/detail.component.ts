import { Eonet } from './../eonet';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor(private dataService: DataService) { }
  eonet: Eonet;
  ngOnInit() {
    this.dataService.getEonetEventById('EONET_4557').subscribe(
      (data: Eonet) => {
        this.eonet = data;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.eonet);
      }
    );
  }

}
