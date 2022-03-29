import { NgModule } from '@angular/core';
import { SlottrakMealLogComponent } from './slottrak-meal-log.component';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    SlottrakMealLogComponent,
    GridComponent,
    DetailComponent
  ],
  imports: [
    RoutingModule
  ],
  exports: [
    SlottrakMealLogComponent
  ]
})
export class SlottrakMealLogModule { }
