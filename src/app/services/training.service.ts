import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  readonly API_URL = "http://localhost:8080/api"
  readonly DEADPOINT_TRAININGS = "/trainings/"//TODO deuxieme / à test
  constructor(private http: HttpClient) { }

  public getTrainings() {
    return this.http.get(this.API_URL + this.DEADPOINT_TRAININGS)
  }
  public postTraining(training: any) {
    return this.http.post(this.API_URL + this.DEADPOINT_TRAININGS, training)
  }
  public delTraining(training : Training) {
    return this.http.delete(this.API_URL + this.DEADPOINT_TRAININGS+ training.id).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body", val);
      },
      response => {
console.log("DELETE call in error", response);
      },
      () => {
console.log("The DELETE observable is now completed.");
      });
  }
  public getTraining(id: number) {
    return this.http.get<Training>(this.API_URL + this.DEADPOINT_TRAININGS + id)
  }
}
