import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MegaMillionLottoService {

  constructor() { }

  generate() {
    return [2,12,22,32,42,52];
  }
}
