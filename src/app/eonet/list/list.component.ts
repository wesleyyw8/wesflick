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
  }];

  orderBy = ['Select Option', 'desc', 'asd'];

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


  sortByChange(value) {
    switch (value) {
      case 'asd': this.eonetList = this.eonetList.sort(this.sortAsd); break;
      case 'desc': this.eonetList = this.eonetList.sort(this.sortDesc); break;
    }
  }

  private sortDesc(a, b) {
    a = new Date(a.geometries[0].date);
    b = new Date(b.geometries[0].date);
    return a > b ? -1 : a < b ? 1 : 0;
  }

  private sortAsd(a, b) {
    a = new Date(a.geometries[0].date);
    b = new Date(b.geometries[0].date);
    return a < b ? -1 : a > b ? 1 : 0;
  }

  moreInformation(id) {
    this.router.navigate(['/list', id]);
  }

}
