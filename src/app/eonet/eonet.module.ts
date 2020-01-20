import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ListComponent
    }, {
      path: ':id',
      component: DetailComponent,
    }
  ])],
  declarations: [DetailComponent, ListComponent]
})
export class EonetModule { }
