import { TwoStepLottoService } from './../two-step-lotto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-steps-lotto',
  templateUrl: './two-steps-lotto.component.html',
  styleUrls: ['./two-steps-lotto.component.scss']
})
export class TwoStepsLottoComponent implements OnInit {
  title = 'Two Steps Lotto Numbers';
  twoStepsLottoNumbers: number[];

  constructor(private service: TwoStepLottoService) { }

  ngOnInit() {
    this.generateTwoStepsLottoNumbers();
  }

  generateTwoStepsLottoNumbers(): void {
    this.service.generate().subscribe(numbers => this.twoStepsLottoNumbers = numbers);
  }

}
