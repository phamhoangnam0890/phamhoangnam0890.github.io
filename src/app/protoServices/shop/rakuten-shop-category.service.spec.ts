import { TestBed } from '@angular/core/testing';

import { RakutenShopCategoryService } from './rakuten-shop-category.service';

describe('RakutenShopCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RakutenShopCategoryService = TestBed.get(RakutenShopCategoryService);
    expect(service).toBeTruthy();
  });
});
