import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  providers: [ TrainingService ]
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  error = null;
  constructor(private cartService : CartService, private router : Router, private trainingService : TrainingService){ }

  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe({
      next: (data) => {
this.listTrainings = data as Training[];
      },
      error: (err) => this.error = err.message,
      complete: () => this.error = null
    })
   // this.listTrainings =[
  //
      //{id:1,name:'JAVA',description:'formation Java SE 8 sur 5 jours',price:1500,quantity:0},
      //{id:2,name:'DotNet',description:'formation DotNet sur 3 jours',price:1000,quantity:0},
    //  {id:3,name:'Python',description:'formation Python sur 5 jours',price:1500,quantity:0},
  //  ]
  }

  onAddToCart(training:Training) {
    this.cartService.addTraining(training);
    this.router.navigateByUrl('cart');
  }

  onDelTrainings(training:Training){
    this.trainingService.delTraining(training);
    console.log("training"+training.name);
    
  }
}
