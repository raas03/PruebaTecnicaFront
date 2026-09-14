import { TestBed } from '@angular/core/testing';

import { StudentsServicTsService } from './students.servic.ts.service';

describe('StudentsServicTsService', () => {
  let service: StudentsServicTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsServicTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
