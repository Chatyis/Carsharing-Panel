import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-side-panel-button',
  templateUrl: './side-panel-button.component.html'
})
export class SidePanelButtonComponent {
  @Input() navItem: NavItem = {route: '',value: ''};

  constructor(public router:Router){  }
}
