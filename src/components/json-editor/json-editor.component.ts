import {
  Component,
  Input,
  ViewChild,
  forwardRef,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const JSONEditor = require('jsoneditor/dist/jsoneditor.js');

/**
 * The JSON editor needs styling and some graphics
 * We read the raw css and svg files and replace any file reference to the svg with
 * an inline reference of the data encoded svg file
 * 
 * The css must be added as a style with  ViewEncapsulation set to None
 */

const JSONEditorSVG: string = require('!raw-loader!jsoneditor/dist/img/jsoneditor-icons.svg');
const JSONEditorCSS: string = require('!raw-loader!jsoneditor/dist/jsoneditor.css')
                              .replace(/img\/jsoneditor-icons\.svg/g, 'data:image/svg+xml;base64,' + btoa(JSONEditorSVG));

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => JsonEditorComponent),
  multi: true
};

@Component({
  selector: 'vcl-json-editor',
  styles: [JSONEditorCSS],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'json-editor.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class JsonEditorComponent implements ControlValueAccessor {

  @ViewChild('el') el;


  @Input('mode') mode: 'tree' | 'form' | 'text' | 'view' = 'tree';
  @Input('value') value: Object = {};

  /**
   * @link https://github.com/josdejong/jsoneditor/blob/master/docs/api.md
   */
  @Input('options') options: any = {};
  @Input('height') height: string = '250px';

  editor: any;

  constructor() { }

  ngAfterViewInit() {

    this.options.onChange = () => {
      this.value = this.editor.get();
      !!this.onChangeCallback && this.onChangeCallback(this.value);
    };

    this.options.onModeChange = newMode => {
      this.mode = newMode;
    };

    this.editor = new JSONEditor(this.el.nativeElement, this.options);
    this.editor.set(this.value);
  }

  /**
   * get the current state of the edited json
   */
  getValue(): Object {
    return this.editor.get();
  }


  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: (_: any) => void;
  private onChangeCallback: (_: any) => void;

  writeValue(value: any): void {
    this.value = value;
    this.editor.set(this.value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}