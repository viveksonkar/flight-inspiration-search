import { TestBed } from '@angular/core/testing';

import { FlightInspirationService } from './flight-inspiration.service';

describe('FlightInspirationService', () => {
  let service: FlightInspirationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightInspirationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
