import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
})
export class EditableInputComponent {
  @Input() title: string;
  @Input() controlName: string;
  @Input() disabled: boolean = true;
  @Input() formGroup: FormGroup;
}
