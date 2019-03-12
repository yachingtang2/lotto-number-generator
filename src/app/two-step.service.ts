import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwoStepService {

  constructor() { }

  generate(): Observable<number[]> {
    return of([5,15,25,35,45]);
  }
}
