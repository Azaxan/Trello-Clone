import { TestBed, inject } from '@angular/core/testing';

import { BoardDataService } from './board-data.service';

describe('BoardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardDataService]
    });
  });

  it('should be created', inject([BoardDataService], (service: BoardDataService) => {
    expect(service).toBeTruthy();
  }));
});
