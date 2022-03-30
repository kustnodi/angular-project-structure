import { TestBed } from '@angular/core/testing';

import { DetailStateProviderService } from './detail-state-provider.service';

describe('DetailStateProviderService', () => {
  let service: DetailStateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailStateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
