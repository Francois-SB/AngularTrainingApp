import { NgModule } from '@angular/core';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path : 'trainings', component : TrainingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
