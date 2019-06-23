import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto-number-parent',
  templateUrl: './lotto-number-parent.component.html',
  styleUrls: ['./lotto-number-parent.component.scss']
})
export class LottoNumberParentComponent implements OnInit {
  title: string;
  lottoNumbers: number[];

  constructor() { }

  ngOnInit() {
  }

}
