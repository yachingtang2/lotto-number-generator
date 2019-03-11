import { Component, OnInit } from '@angular/core';
import { MegaMillionLottoService } from '../mega-million-lotto.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-mega-million-lotto',
  templateUrl: './mega-million-lotto.component.html',
  styleUrls: ['./mega-million-lotto.component.scss']
})
export class MegaMillionLottoComponent implements OnInit {
  title = 'Mega Million Lotto numbers';
  megaMillionLottoNumbers: number[];

  constructor(private service: MegaMillionLottoService) { }

  ngOnInit() {
    this.generateMegaMillionLottoNumbers();
  }

  generateMegaMillionLottoNumbers(): void {
    this.service.generate().subscribe(numbers => {
      this.megaMillionLottoNumbers = numbers;
    });
  }

}
