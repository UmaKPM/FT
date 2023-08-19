import { TestBed } from '@angular/core/testing';

import { BufferingService } from './buffering.service';

describe('BufferingService', () => {
  let service: BufferingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BufferingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
