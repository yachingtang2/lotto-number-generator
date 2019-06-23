import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lotto-number-display',
  templateUrl: './lotto-number-display.component.html',
  styleUrls: ['./lotto-number-display.component.scss']
})
export class LottoNumberDisplayComponent implements OnInit {
  @Input() title: any;
  @Input() lottoNumbers: number[];

  constructor() { }

  ngOnInit() {
  }

}
