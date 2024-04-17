import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-params-with-input',
  standalone: true,
  imports: [],
  templateUrl: './read-params-with-input.component.html',
  styleUrl: './read-params-with-input.component.scss'
})
export class ReadParamsWithInputComponent implements OnInit {
  @Input('pathId') pathId = '';

  ngOnInit(): void {
    console.log('VALOR VEM PELA URL: ', this.pathId);
  }
}
