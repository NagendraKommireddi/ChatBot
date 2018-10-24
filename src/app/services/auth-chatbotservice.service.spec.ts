import { TestBed, inject } from '@angular/core/testing';

import { AuthChatbotserviceService } from './auth-chatbotservice.service';

describe('AuthChatbotserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthChatbotserviceService]
    });
  });

  it('should be created', inject([AuthChatbotserviceService], (service: AuthChatbotserviceService) => {
    expect(service).toBeTruthy();
  }));
});
