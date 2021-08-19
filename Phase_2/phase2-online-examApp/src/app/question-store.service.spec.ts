import { TestBed } from '@angular/core/testing';

import { QuestionStoreService } from './question-store.service';

describe('QuestionStoreService', () => {
  let service: QuestionStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
