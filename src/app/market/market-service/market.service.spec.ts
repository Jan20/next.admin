import { TestBed, inject } from '@angular/core/testing';

import { MarketService } from './market.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketService]
    });
  });

  it('should be created', inject([MarketService], (service: MarketService) => {
    expect(service).toBeTruthy();
  }));
});
