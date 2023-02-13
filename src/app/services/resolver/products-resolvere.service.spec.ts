import { TestBed } from '@angular/core/testing';

import { ProductsResolvereService } from './products-resolvere.service';

describe('ProductsResolvereService', () => {
  let service: ProductsResolvereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsResolvereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
