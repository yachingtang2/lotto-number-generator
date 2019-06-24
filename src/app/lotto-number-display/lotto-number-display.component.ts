import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lotto-number-display',
  templateUrl: './lotto-number-display.component.html',
  styleUrls: ['./lotto-number-display.component.scss']
})
export class LottoNumberDisplayComponent implements OnInit {
  @Input() title: any;
  @Input() lottoNumbers: number[];
  @Output() regenerate = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.regenerate.emit(true);
  }
}
