import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TexasLottoService {

  constructor() { }

  generate(): Observable<number[]> {
    return of([1, 2, 3, 4, 5, 6]);
  }
}
