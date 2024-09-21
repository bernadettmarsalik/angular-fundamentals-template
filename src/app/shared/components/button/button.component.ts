import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string | undefined;
  @Input() iconName: IconDefinition | undefined; 
  @Output() buttonClick = new EventEmitter<void>();

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  onClick() {
    this.buttonClick.emit();
  }
}
