import { HostListener, Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Map<number, Training>;
  private keyCart = "keyCartMyShop";
  /* listCartTrainings : Training[] | undefined; */
  constructor() { 
    this.cart = new Map<number,Training>
    //constructor appellé lors de la creation du service donc check si panier ds locale
    if(localStorage.getItem(this.keyCart)){
      let localCart = localStorage.getItem(this.keyCart);//string
      //string => Map
    
      this.cart = JSON.parse(localCart,reviver);
    }

  }

  /**Ajout training dans panier service (panier #Map) et maj locale
   * 
   * @param training 
   */
  addTraining(training:Training){
    //s'il existe => modif qté
    const trainingCartLine = this.cart.get(training.id) ;
    if(trainingCartLine) trainingCartLine.quantity = training.quantity;
    //s'il n'existe pas => add line
    else this.cart.set(training.id,training);

    //maj locale
    this.majLocale();
}
  rmTraining(id:number){
    const trainingCartLine = this.cart.get(id) ;
    if(trainingCartLine) {
      this.cart.delete(id);
      console.log("cart : "+this.cart.size)
    }

    //maj locale
    this.majLocale();
  }

  getCart(){
    let cartValues = new Array<Training>();
    cartValues = Array.from(this.cart.values());
    return cartValues;
  }

  majLocale(){
    if(localStorage.getItem(this.keyCart)){
      localStorage.removeItem(this.keyCart);
      if(this.cart.size != 0) localStorage.setItem(this.keyCart,JSON.stringify(this.cart,replacer));
    }
  }
  
/**sauvegarde du panier lors de la fermeture (ou unfocus) de la fenetre
 * 
 * @param event 
 */
/* 
  @HostListener("window:beforeunload",["$event"])
  unloadHandler(event: BeforeUnloadEvent) {
    const cartVar = this.cart;
    if(cartVar){
      //si cart not null, traitement, sinon clear local storage
      if(cartVar.size != 0){
        cartVar.forEach((value, key)=> {
          //si la clé existe dans le local storage, j'enlève l'ancienne valeur
          //et je met la nouvelle
          if(localStorage.getItem(key.toString())){
            localStorage.removeItem(JSON.stringify(key));
            localStorage.setItem(key.toString(),JSON.stringify(value));
            console.log("cart key stored in local"+key)
          }
        });
      }else{

          localStorage.removeItem("1");
          localStorage.removeItem("2");
          localStorage.removeItem("3");
        console.log("Local clear")
      }
  } 
  console.log("onbeforeunload event call")
  }
**
 * recup data from page load to the cart
 *
  @HostListener('window:load',['$event'])
  onPageLoad(event: Event) {
   console.log('loaded',event); 
   let localStorageItem = localStorage.getItem('1');
   for(let i=0;i<3;i++){
    localStorageItem = localStorage.getItem(i.toString());
    this.cart.set(i,localStorageItem.);//localStorageItem => parse
   }

} */
}
