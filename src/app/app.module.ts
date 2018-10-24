import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { ChatbotserviceService ,AuthChatbotserviceService} from './services';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ChatBotModule} from './components/chat-bot/chat-bot.module';
import { DialogViewComponent,DialogOverView } from './components/dialog-view/dialog-view.component';
import { AppRoutingModule } from './/app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    ChatBotComponent,
    DialogViewComponent,
    DialogOverView
  ],
  imports: [
    BrowserModule,
  //  BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChatBotModule,
    MatDialogModule,
  //  MatButtonModule, MatInputModule, MatCardModule, MatIconModule,
   // MatBottomSheetModule,
    MDBBootstrapModule.forRoot(),
  AppRoutingModule
  ],
  entryComponents:[
    DialogOverView
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [
    ChatbotserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthChatbotserviceService,
      multi: true
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
