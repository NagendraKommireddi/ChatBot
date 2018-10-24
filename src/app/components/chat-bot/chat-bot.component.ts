import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable} from 'rxjs'
import {scan} from 'rxjs/operators'
import {ChatbotserviceService} from '../../services/chatbotservice.service'
import {Message} from '../../models/message'

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit,OnDestroy {
  allMessages:Observable<Message[]>
  formInput:string

  constructor(public service:ChatbotserviceService) {
    this.formInput =""
   }

  ngOnInit() {
  this.allMessages=this.service.conversation.asObservable().pipe(
    scan((acc, val) => acc.concat(val))
  )
  this.service.textConversation("who are you")
  }

  
  ngOnDestroy() {
    // this.service.destroyVoiceConversation();
  }

  sendMessageToBot() {
    this.service.textConversation(this.formInput);
    this.formInput = '';
  }

  //For Speech Recognitions
  

  // startTalkingToBot() {
  //    this.service.voiceConversation()
  //     .subscribe(
  //       (value) => {
  //         this.formInput = value;
  //         // console.log(value);
  //       },
  //       (err) => {
  //         console.log(err);
  //         if (err.error === 'no-speech') {
  //           // console.log("Talking error");
  //           this.startTalkingToBot();
  //         }
  //       },
  //       () => {
  //         // console.log("Talking complete");
  //         this.startTalkingToBot();
  //       });
  // }
}
