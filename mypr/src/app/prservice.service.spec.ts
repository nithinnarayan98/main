import { TestBed } from '@angular/core/testing';

import { PrserviceService } from './prservice.service';

describe('PrserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrserviceService = TestBed.get(PrserviceService);
    expect(service).toBeTruthy();
  });
});
