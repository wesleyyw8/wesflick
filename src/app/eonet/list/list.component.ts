import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  eonetList = [];

  ngOnInit() {
    this.dataService.getAllEonetEvents().subscribe(
      (data) => {
        this.eonetList = (data as any).events;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  moreInformation(id) {
    this.router.navigate(['/list', id]);

  }
}
