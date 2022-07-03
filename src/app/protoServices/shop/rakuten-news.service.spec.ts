import { TestBed } from '@angular/core/testing';

import { RakutenNewsService } from './rakuten-news.service';

describe('RakutenNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RakutenNewsService = TestBed.get(RakutenNewsService);
    expect(service).toBeTruthy();
  });
});
