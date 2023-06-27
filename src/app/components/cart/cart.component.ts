import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList : Training[] | undefined;
  constructor(private cartService : CartService, private router : Router){ }
  
  /**
   * Copie le panier de cartService dans cartList
   */
  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
  }

  onRmTraining(id:number){
    console.log(id)
    this.cartService.rmTraining(id);
    //this.ngOnInit;//recharger la div
    if (this.cartList?.length == 0 ) this.router.navigateByUrl('trainings');
  }

  
}
