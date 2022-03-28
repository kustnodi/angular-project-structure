import { TestBed } from '@angular/core/testing';

import { SlottrakUiService } from './slottrak-ui.service';

describe('SlottrakUiService', () => {
  let service: SlottrakUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlottrakUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
