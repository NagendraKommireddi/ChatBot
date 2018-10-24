import { Injectable, Injector } from '@angular/core';
//import { HttpInterceptor } from '@angular/common/http';
import { ChatbotserviceService } from './chatbotservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthChatbotserviceService {

  constructor(public injector:Injector) { }
  intercept(req, next) {
    const chatbotservice = this.injector.get(ChatbotserviceService);
    const authRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + chatbotservice.token)
    });

    return next.handle(authRequest);
}
}
