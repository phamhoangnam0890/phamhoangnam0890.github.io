import { TestBed } from '@angular/core/testing';

import { RakutenEventsService } from './rakuten-events.service';

describe('RakutenEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RakutenEventsService = TestBed.get(RakutenEventsService);
    expect(service).toBeTruthy();
  });
});
