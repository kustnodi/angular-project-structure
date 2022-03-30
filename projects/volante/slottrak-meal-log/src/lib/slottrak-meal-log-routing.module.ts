import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';
import { SlottrakMealLogComponent } from './slottrak-meal-log.component';

const routes: Routes = [
  {
    path: '',
    component: SlottrakMealLogComponent,
    children: [
      {
        path: '',
        component: GridComponent
      },
      {
        path: ':id/detail',
        component: DetailComponent
      }
    ]
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
export class SlottrakMealLogRoutingModule { }
