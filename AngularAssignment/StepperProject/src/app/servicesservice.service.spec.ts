import { TestBed } from '@angular/core/testing';

import { ServicesserviceService } from './servicesservice.service';

describe('ServicesserviceService', () => {
  let service: ServicesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
