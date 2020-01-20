import { DataService } from './../eonet/data.service';
import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, Event, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements AfterViewInit {

  constructor(private dataService: DataService) {
    
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.isLoading = false;
    });
  }

}
