import { TestBed } from '@angular/core/testing';

import { RakutenItemsService } from './rakuten-items.service';

describe('RakutenItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RakutenItemsService = TestBed.get(RakutenItemsService);
    expect(service).toBeTruthy();
  });
});
