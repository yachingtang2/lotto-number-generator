import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwoStepLottoService {

  constructor() { }

  generate(): Observable<number[]> {
    return of([1,2,3,4,5]);
  }
}
