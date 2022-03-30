import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { SlottrakMachinesRoutingModule } from './slottrak-machines-routing.module';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    MainComponent,
    GridComponent,
    DetailComponent
  ],
  imports: [
    SlottrakMachinesRoutingModule
  ],
  exports: [
  ]
})
export class SlottrakMachinesModule { }
