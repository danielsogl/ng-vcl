import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { L10nModule } from '../l10n/index';
import { VCLInputModule } from '../input/index';
import { VCLIconModule } from '../icon/index';
import { VCLButtonModule } from '../button/index';
import { VCLWormholeModule } from '../wormhole/index';

import { TokenComponent, Token } from './token.component';
import { TokenListComponent } from './token-list.component';
import { TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre } from './token-input.component';

export { TokenComponent, TokenInputComponent, TokenListComponent, Token };

@NgModule({
  imports: [CommonModule, L10nModule, VCLInputModule, VCLButtonModule, FormsModule, VCLIconModule, VCLWormholeModule],
  exports: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
  declarations: [TokenComponent, TokenListComponent, TokenInputComponent, TokenInputLabelPost, TokenInputLabelPre],
  providers: [],
})
export class VCLTokenModule { }
