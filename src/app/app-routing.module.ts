import { NgModule } from '@angular/core';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CuTrainingsComponent } from './components/cu-trainings/cu-trainings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'trainings', component : TrainingsComponent },
  { path : 'cart', component : CartComponent },
  { path : 'cu-trainings', component : CuTrainingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
