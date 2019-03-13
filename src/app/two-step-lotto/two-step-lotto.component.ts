import { Component, OnInit } from '@angular/core';
import { TwoStepLottoService } from '../two-step-lotto.service';

@Component({
  selector: 'app-two-step-lotto',
  templateUrl: './two-step-lotto.component.html',
  styleUrls: ['./two-step-lotto.component.scss']
})
export class TwoStepLottoComponent implements OnInit {
  title = 'Two Step Lotto Numbers';
  twoStepLottoNumbers: number[];

  constructor(private twoStepLottoService: TwoStepLottoService) { }

  ngOnInit() {
    this.generateTwoStepLottoNumbers();
  }

  generateTwoStepLottoNumbers(): any {
    this.twoStepLottoService.generate().subscribe(numbers => this.twoStepLottoNumbers = numbers);
  }

}