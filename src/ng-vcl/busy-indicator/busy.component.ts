import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[vclBusy]',
  templateUrl: 'busy.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusyComponent {
  @Input('vclBusy')
  @HostBinding('class.vclLoadingLayerContainer')
  busy = false;

  @Input()
  busyIndicatorType: string;

  @Input()
  busyLabel: string | undefined;
}
