import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-cu-trainings',
  templateUrl: './cu-trainings.component.html',
  styleUrls: ['./cu-trainings.component.css']
})
export class CuTrainingsComponent implements OnInit {

  myForm: FormGroup;
  training = {} as Training;
  error: any;
  //formBuilder = {} as FormBuilder;
  constructor(private router: Router, private fb: FormBuilder, private trainingService: TrainingService) {
    // let customer=this.cartService.getCustomer();
    this.myForm = new FormGroup({
      id: new FormControl(this.training.id),
      name: new FormControl(this.training.name),
      description: new FormControl(this.training.description),
      price: new FormControl(this.training.price),
      quantity: new FormControl(this.training.quantity),
    })
  }

  ngOnInit(): void {
    this.training = this.trainingService.trainingTemp!;
    this.myForm = this.fb.group({
      id: [this.training.id, Validators.required],
      name: [this.training.name, Validators.required],
      description: [this.training.description, Validators.required],
      price: [this.training.price, Validators.required, Validators.required],
      quantity: [this.training.quantity, Validators.required],
    })
    console.log("myForm initiated");
    
  }


  // métode pour créer user
  onSaveTraining(form: FormGroup) {
    let training = {} as Training;
    // 1 récupérer les valeurs du formulaire
    if (form.valid) {
      console.log(form.value.password);


      // 2 instancier un user  // 3 appel à l'API méthode Post
      training = new Training(form.value.id, form.value.name, form.value.description, form.value.price, form.value.quantity);
      this.trainingService.postTraining(training).subscribe({
        next: (data) => console.log(data),
        error: (err) => this.error = err.message,
        complete: () => console.log("Training updated or created")
      })
    }

this.trainingService.trainingTemp = undefined;
 //   this.router.navigateByUrl('myspace')
  }


}
