import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto-number-request-form',
  templateUrl: './lotto-number-request-form.component.html',
  styleUrls: ['./lotto-number-request-form.component.scss']
})
export class LottoNumberRequestFormComponent implements OnInit {
  lottoNumberRequestForm = new FormGroup({
    firstName: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
