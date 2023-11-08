import { TestBed } from '@angular/core/testing';

import { PropertieService } from './propertie.service';

describe('PropertieService', () => {
  let service: PropertieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
