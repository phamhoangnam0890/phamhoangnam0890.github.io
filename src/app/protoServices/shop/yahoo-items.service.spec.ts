import { TestBed } from '@angular/core/testing';

import { YahooItemsService } from './yahoo-items.service';

describe('YahooItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YahooItemsService = TestBed.get(YahooItemsService);
    expect(service).toBeTruthy();
  });
});
