import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Map<number, Training>;
  /* listCartTrainings : Training[] | undefined; */
  constructor() { 
    this.cart = new Map<number,Training>
  }

  addTraining(training:Training){
    //s'il existe => modif qté
    const trainingCartLine = this.cart.get(training.id) ;
    if(trainingCartLine) trainingCartLine.quantity = training.quantity;
    //s'il n'existe pas => add line
    else this.cart.set(training.id,training);
}
  rmTraining(id:number){
    const trainingCartLine = this.cart.get(id) ;
    if(trainingCartLine) {
      this.cart.delete(id);
      console.log("cart : "+this.cart.size)
    }
  }

  getCart(){
    let cartValues = new Array<Training>();
    cartValues = Array.from(this.cart.values());
    return cartValues;
  }
}
