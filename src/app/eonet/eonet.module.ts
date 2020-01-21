import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
