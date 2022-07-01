import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('subNumber should call', () => {
    spyOn(service, 'subNumber').and.callThrough();
    service.subNumber(3, 2);
    expect(service.c).toEqual(1);
  });

  it('multipleNumber should call', () => {
    spyOn(service, 'multipleNumber').and.callThrough();
    service.multipleNumber(3, 2);
    expect(service.c).toEqual(6);
  });


});
