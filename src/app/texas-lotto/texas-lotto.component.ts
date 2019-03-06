import { Component, OnInit } from '@angular/core';
import { TexasLottoService } from '../texas-lotto.service';

@Component({
  selector: 'app-texas-lotto',
  templateUrl: './texas-lotto.component.html',
  styleUrls: ['./texas-lotto.component.scss']
})
export class TexasLottoComponent implements OnInit {
  title = 'Texas Lotto';
  lottoNumbers: number[];

  constructor(private texasLottoService: TexasLottoService) { }

  ngOnInit() {
    this.generateTexasLottoNumbers();
  }

  generateTexasLottoNumbers(): void {
    this.texasLottoService.generate().subscribe(numbers => {
      this.lottoNumbers = numbers;
    });
  }
}
