import { TestBed } from '@angular/core/testing';

import { MockAddsService } from './mock-adds.service';

describe('MockAddsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockAddsService = TestBed.get(MockAddsService);
    expect(service).toBeTruthy();
  });
});
