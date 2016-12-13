import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'vcl-token',
  template: `
      <span class="vclTokenLabel">{{ label }}</span>
      <button *ngIf="removeable" type="button" title="Remove"
      class="vclTransparent vclButton">
        <div class="vclIcogram" (tap)="remove()">
          <span class="vclIcon fa fa-remove"></span>
        </div>
      </button>`,
  host: {
    '[class.vclToken]': 'true',
    '[class.vclSelected]': 'selected'
  }
})
export class TokenComponent {

  @Input('label') label: string;
  @Input('selected') selected: boolean = false;
  @Input('removeable') removeable: boolean = false;

  @Output('onRemove') onRemove = new EventEmitter();

  constructor() {

  }

  remove() {
    this.onRemove.emit();
  }
}