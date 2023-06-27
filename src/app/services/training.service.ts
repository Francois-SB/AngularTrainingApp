import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  readonly API_URL = "http://localhost:8080/api"
  readonly DEADPOINT_TRAININGS = "/trainings"
  constructor(private http:HttpClient) { }

  public getTrainings(){
return this.http.get(this.API_URL+this.DEADPOINT_TRAININGS)
  }
}
