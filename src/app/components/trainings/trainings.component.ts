import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings : Training[] | undefined;
  constructor(){ }

  ngOnInit(): void {
    this.listTrainings = [
      {id:1,name:'JAVA',description:'formation Java SE 8 sur 5 jours',price:1500,quantity:0},
      {id:2,name:'DotNet',description:'formation DotNet sur 3 jours',price:1000,quantity:0},
      {id:3,name:'Python',description:'formation Python sur 5 jours',price:1500,quantity:0},
    ]
  }

  onAddToCart(training:Training) {
    console.log(training.name)
    console.log(training.quantity)
  
  }
}
