import {Component, ElementRef, forwardRef, Renderer2, ViewEncapsulation} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {MdlCheckboxComponent} from '../checkbox/mdl-checkbox.component';

@Component({
  selector: 'mdl-icon-toggle',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdlIconToggleComponent),
    multi: true
  }],
  host: {
    '(click)': 'onClick()',
    '[class.mdl-icon-toggle]': 'true',
    '[class.is-upgraded]': 'true',
    '[class.is-checked]': 'value',
    '[class.is-disabled]': 'disabled'
  },
  outputs: ['change'],
  template: `
    <input type="checkbox" class="mdl-icon-toggle__input"
           (focus)="onFocus()"
           (blur)="onBlur()"
           [disabled]="disabled"
           [(ngModel)]="value">
    <mdl-icon class="mdl-icon-toggle__label">
      <ng-content></ng-content>
    </mdl-icon>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MdlIconToggleComponent extends MdlCheckboxComponent {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
  }

}
