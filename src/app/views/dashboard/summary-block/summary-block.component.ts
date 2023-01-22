import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-block',
  templateUrl: './summary-block.component.html',
  styleUrls:['summary-block.component.scss']
})
export class SummaryBlockComponent {
  @Input() title: string;
  @Input() value: string;
}
