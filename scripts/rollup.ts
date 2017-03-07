import * as gulpRollup from 'gulp-better-rollup';

const globals: {[name: string]: string} = {
  // Angular dependencies
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/http': 'ng.http',
  '@angular/router': 'ng.router',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',

  // Rxjs dependencies
  'rxjs/Observable': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/add/observable/merge': 'Rx.Observable',
  'rxjs/add/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/forkJoin': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable',
  'rxjs/add/observable/timer': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
  'rxjs/add/observable/from': 'Rx.Observable',
  'rxjs/add/observable/interval': 'Rx.Observable',
  'rxjs/add/observable/combineLatest': 'Rx.Observable',
  'rxjs/add/observable/never': 'Rx.Observable',
  'rxjs/add/operator/combineLatest': 'Rx.Observable.prototype',
  'rxjs/add/operator/publishReplay': 'Rx.Observable.prototype',
  'rxjs/add/operator/publishBehavior': 'Rx.Observable.prototype',
  'rxjs/add/operator/timer': 'Rx.Observable.prototype',
  'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/filter': 'Rx.Observable.prototype',
  'rxjs/add/operator/do': 'Rx.Observable.prototype',
  'rxjs/add/operator/share': 'Rx.Observable.prototype',
  'rxjs/add/operator/finally': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype',
  'rxjs/add/operator/first': 'Rx.Observable.prototype',
  'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/skipWhile': 'Rx.Observable.prototype',
  'rxjs/add/operator/publish': 'Rx.Observable.prototype',
  'rxjs/add/operator/retryWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/let': 'Rx.Observable.prototype',
  'rxjs/add/operator/scan': 'Rx.Observable.prototype',
  'rxjs/add/operator/withLatestFrom': 'Rx.Observable.prototype',
  'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
  'rxjs/add/operator/skipUntil': 'Rx.Observable.prototype',

  // ng-vcl dependencies
  '@ng-vcl/ng-vcl': 'ngVCL',
  '@ng-vcl/json-editor': 'ngVCL.jsonEditor',
  '@ng-vcl/adv-http': 'ngVCL.advHttp',
  '@ng-vcl/jss-form': 'ngVCL.jssForm',
  '@ng-vcl/store': 'ngVCL.store',
  '@ng-vcl/plotly': 'ngVCL.plotly',

  // Additional dependencies
  'hammerjs': 'Hammer',
  'tether': 'Tether',
  'jsoneditor/dist/jsoneditor.js': 'JSONEditor',
  'jsonschema': 'jsonschema',
  'attr-accept': 'attr-accept',
  'plotly.js': 'Plotly',
};

export function rollup(module) {
  return gulpRollup({
    context: 'this',
    external: Object.keys(globals)
  }, {
    moduleName: globals['@ng-vcl/' + module] || module,
    format: 'umd',
    globals,
    dest: 'index.umd.js'
  });
}
