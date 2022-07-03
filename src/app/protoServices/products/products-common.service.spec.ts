import { TestBed } from '@angular/core/testing';

import { ProductsCommonService } from './products-common.service';

describe('ProductsCommonService', () => {
  let service: ProductsCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
