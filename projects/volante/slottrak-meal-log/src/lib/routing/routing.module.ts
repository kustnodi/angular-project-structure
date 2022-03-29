import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '../grid/grid.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  {
    path: '', component: GridComponent
  },
  {
    path: '/:id', component: DetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
