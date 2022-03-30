import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'machines', loadChildren: () => import('@volante/slottrak-machines').then(m => m.SlottrakMachinesModule) },
  { path: 'meal-log', loadChildren: () => import('@volante/slottrak-meal-log').then(m => m.SlottrakMealLogModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
