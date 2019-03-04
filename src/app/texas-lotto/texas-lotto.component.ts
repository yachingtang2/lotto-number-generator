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
    console.log('YCT - one');
    this.generateTexasLottoNumbers();
    console.log('YCT - two');
  }

  generateTexasLottoNumbers(): void {
    console.log('YCT - here');
    this.lottoNumbers = [1,2,3,4,5,6];
  }
}
