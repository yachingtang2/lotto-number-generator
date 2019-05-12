import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MegaMillionLottoService {

  constructor() { }

  generate(): Observable<number[]> {
    return of([2, 12, 22, 32, 42, 52]);
  }
}
