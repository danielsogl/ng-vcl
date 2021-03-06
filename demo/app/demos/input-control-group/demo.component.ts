import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'demo.component.html'
})
export class InputControlGroupDemoComponent {

  type: string | undefined;
  label: string;

  message = new Subject();
  // emit messages over time
  obs = Observable
    .interval(2000)
    .scan((s, x) => {
      s++;
      if (s > 3) s = 0;
      return s;
    })
    .map(s => {
      if (s == 0) return 'error';
      if (s == 1) return 'warning';
      if (s == 2) return 'success';
      if (s == 3) return undefined;
    })
    .map(type => {

      this.type = type;
      this.label = 'my custom ' + type;

      return {
        type,
        value: 'my custom ' + type
      };
    })
    .subscribe(msg => this.message.next(msg));

}
