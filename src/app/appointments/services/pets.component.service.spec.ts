import { TestBed } from '@angular/core/testing';

import { Pets.ComponentService } from './pets.component.service';

describe('Pets.ComponentService', () => {
  let service: Pets.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pets.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
