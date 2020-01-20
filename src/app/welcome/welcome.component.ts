import { DataService } from './../eonet/data.service';
import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private dataService: DataService) {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataService.isLoading = false;
    });
  }
}
