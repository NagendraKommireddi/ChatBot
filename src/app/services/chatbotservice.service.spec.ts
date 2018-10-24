import { TestBed, inject } from '@angular/core/testing';

import { ChatbotserviceService } from './chatbotservice.service';

describe('ChatbotserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatbotserviceService]
    });
  });

  it('should be created', inject([ChatbotserviceService], (service: ChatbotserviceService) => {
    expect(service).toBeTruthy();
  }));
});
