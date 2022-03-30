import { NgModule } from '@angular/core';
import { SlottrakMealLogComponent } from './slottrak-meal-log.component';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';
import { SlottrakMealLogRoutingModule } from './slottrak-meal-log-routing.module';

@NgModule({
  declarations: [
    SlottrakMealLogComponent,
    GridComponent,
    DetailComponent
  ],
  imports: [
    SlottrakMealLogRoutingModule
  ],
  exports: [
    SlottrakMealLogComponent
  ]
})
export class SlottrakMealLogModule { }
