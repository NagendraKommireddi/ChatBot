import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ChatBotComponent} from './components/chat-bot/chat-bot.component'
import {DialogViewComponent} from './components/dialog-view/dialog-view.component'

const routes: Routes = [
  { path: '', redirectTo: '/chatbot', pathMatch: 'full' },
  { path: 'chatbot', component: ChatBotComponent },
  {path:'dialog',component:DialogViewComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes) 
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
