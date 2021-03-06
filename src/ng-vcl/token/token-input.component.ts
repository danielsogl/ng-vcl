import {
  Component,
  Input, Output,
  forwardRef,
  EventEmitter,
  HostListener,
  ContentChildren,
  ElementRef,
  ViewChild,
  QueryList,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  Directive,
  ContentChild,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from '../input/index';
import { TokenComponent, Token } from './token.component';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TokenInputComponent),
  multi: true
};

@Directive({ selector: '[vcl-token-input-pre]' })
export class TokenInputLabelPre { }

@Directive({ selector: '[vcl-token-input-post]' })
export class TokenInputLabelPost { }

@Component({
  selector: 'vcl-token-input',
  templateUrl: 'token-input.component.html',
  host: {
    '[class.vclInput]': 'true',
    '[class.vclTokenInput]': 'true',
    '[class.vclLayoutHorizontal]': 'true',
    '[class.vclLayoutWrap]': 'true',
    '[attr.tabindex]': '-1',
  },
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenInputComponent implements ControlValueAccessor {

  tokens: Token[] = [];

  @ViewChild('input')
  input: ElementRef;

  @Input()
  selectable: boolean = true;

  @Input()
  selectedAfterAdd: boolean = false;

  @Input()
  placeholder: string | undefined = 'Type to add tokens';

  @Input()
  inputClass: string | undefined;

  @Input()
  icon: string = 'fa:remove';

  @Input()
  tabindex: number = 0;

  @Input()
  tokenClass: string | undefined;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @Output()
  change = new EventEmitter<Token[]>();

  @Output()
  add = new EventEmitter<Token>();

  @Output()
  remove = new EventEmitter<Token>();

  @Output()
  confirm = new EventEmitter<Token[]>();

  @ContentChild(TokenInputLabelPre, { read: TemplateRef })
  labelPre: TokenInputLabelPre;

  @ContentChild(TokenInputLabelPost, { read: TemplateRef })
  labelPost: TokenInputLabelPost;

  constructor(private cdRef: ChangeDetectorRef) { }

  @HostListener('focus', ['$event'])
  async onFocus(ev?) {
    await new Promise(res => setTimeout(res, 1000));
    this.input.nativeElement.focus();
  }

  @HostBinding('class.vclFocused')
  focused = false;

  onInputFocus() {
    this.focused = true;
  }

  onInputBlur() {
    this.focused = false;
    this.onTouched();
  }

  get vclFocused() {
    return this.input && typeof document !== 'undefined' && document.activeElement === this.input.nativeElement;
  }

  /**
   * remove last token on double-backspace
   */
  private lastKey: string | undefined;
  @HostListener('keydown', ['$event'])
  onKeydown(ev?: KeyboardEvent) {
    const value = this.input && this.input.nativeElement.value;
    const code = ev && (ev.code || ev.key); // fallback for ie11
    if (code == 'Backspace' && this.lastKey == 'Backspace' && value  === '') {
      // remove last token
      const token = this.tokens.pop();
      this.remove.emit(token);
      this.triggerChange();
    } else if (code) {
      this.lastKey = code;
    }
  }

  addToken(label: string) {
    if (label) {
      const token = {
        selected: this.selectedAfterAdd,
        label
      };
      this.tokens.push(token);
      this.input.nativeElement.value = '';
      this.add.emit(token);
      this.triggerChange();
    } else if (label === '') {
      this.confirm.emit(this.tokens);
    }
  }

  select(token: Token) {
    if (this.selectable) {
      token.selected = !token.selected;
      this.triggerChange();
    }
  }

  removeToken(token: Token) {
    this.tokens = this.tokens.filter(t => t !== token);
    this.remove.emit(token);
    this.triggerChange();
    this.input.nativeElement.focus();
  }

  triggerChange() {
    this.change.emit(this.tokens);
    this.onChange(this.tokens);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};

  writeValue(tokens: any): void {
    if (Array.isArray(tokens)) {
      this.tokens = tokens.map(t => typeof t === 'string' ? {label: t, selected: this.selectedAfterAdd} : t)
                          .filter(t => typeof t === 'object' && t);
    } else {
      this.tokens = [];
    }
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
