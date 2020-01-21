import { Eonet } from './../eonet';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor(private dataService: DataService) { }
  componentActive = true;
  eonet: Eonet;
  ngOnInit() {
    this.dataService.getEonetEventById('EONET_4557').pipe( takeWhile(() => this.componentActive)).subscribe(
      (data: Eonet) => {
        this.eonet = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
