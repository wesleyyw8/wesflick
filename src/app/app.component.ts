import { Component, OnInit } from '@angular/core';
import { DataService } from './eonet/data.service';
import { Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(private dataService: DataService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.dataService.isLoading = true;
    }
  }
}
