import { TestBed } from '@angular/core/testing';

import { MasterclockService } from './masterclock.service';

describe('MasterclockService', () => {
  let service: MasterclockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterclockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
