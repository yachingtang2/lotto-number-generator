import { Component, OnInit } from '@angular/core';
import { TwoStepLottoService } from '../two-step-lotto.service';

@Component({
  selector: 'app-two-steps-lotto',
  templateUrl: './two-steps-lotto.component.html',
  styleUrls: ['./two-steps-lotto.component.scss']
})
export class TwoStepsLottoComponent implements OnInit {

  title = 'Two Steps Lotto Numbers';
  lottoNumbers: number[];

  constructor(private service: TwoStepLottoService) {}

  ngOnInit(): void {
    this.generateTwoStepsLottoNumbers();
  }

  generateTwoStepsLottoNumbers(): void {
    this.service.generate().subscribe(numbers => this.lottoNumbers = numbers);
  }
}
