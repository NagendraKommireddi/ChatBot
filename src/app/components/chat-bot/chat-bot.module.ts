import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,MatIcon} from '@angular/material/icon'
import { MatButtonModule,MatFormFieldModule, MatInputModule, MatCardModule, MatBottomSheetModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatInputModule, MatCardModule, MatIconModule,
    MatBottomSheetModule,MatFormFieldModule
  ],
  exports:[
    FormsModule,MatFormFieldModule,
    MatButtonModule, MatInputModule, MatCardModule, MatIconModule,
    MatBottomSheetModule,
  ],
  declarations: []
})
export class ChatBotModule { }
