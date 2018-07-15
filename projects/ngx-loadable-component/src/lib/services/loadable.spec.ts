import { TestBed, inject } from '@angular/core/testing';

import { LoadableService } from './loadable.service';

describe('LoadableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadableService]
    });
  });

  it('should be created', inject([LoadableService], (service: LoadableService) => {
    expect(service).toBeTruthy();
  }));
});
