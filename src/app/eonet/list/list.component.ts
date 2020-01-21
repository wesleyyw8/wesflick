import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  componentActive = true;

  constructor(private dataService: DataService, private router: Router) { }

  eonetList = [];
  selectedFilter = null;
  filterBy = [{
    key: 'all',
    value: 'all'
  }, {
    key: 'status',
    value: 'open'
  }, {
    key: 'status',
    value: 'closed'
  }
  ];

  ngOnInit() {
    this.selectedFilter = this.filterBy[0].value;
    this.onChange(this.selectedFilter);
  }
  
  onChange(item) {
    switch (item) {
      case 'all': this.loadList(''); break;
      case 'open': this.loadList('status=open'); break;
      case 'closed': this.loadList('status=closed'); break;
      default: this.loadList(''); break;
    }
  }

  private loadList(filter) {
    this.eonetList = [];
    this.dataService.getAllEonetEvents(filter).pipe( takeWhile(() => this.componentActive)).subscribe(
      (data) => {
        this.eonetList = (data as any).events;
      },
      (error) => {
        console.log(error);
      },
      () => console.log('list loaded')
    );
  }

  moreInformation(id) {
    this.router.navigate(['/list', id]);
  }

}
