import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartTrainingList: Map<number, Training>;
  /* listCartTrainings : Training[] | undefined; */
  constructor() { 
    this.cartTrainingList = new Map<number,Training>
  }

  addTraining(training:Training){
    //s'il existe => modif qté
    const trainingCartLine = this.cartTrainingList.get(training.id) ;
    if(trainingCartLine) trainingCartLine.quantity = training.quantity;
    //s'il n'existe pas => add line
    else this.cartTrainingList.set(training.id,training);
}

}
