import { TestBed, inject } from '@angular/core/testing';

import { ColumnDataService } from './column-data.service';

describe('ColumnDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnDataService]
    });
  });

  it('should be created', inject([ColumnDataService], (service: ColumnDataService) => {
    expect(service).toBeTruthy();
  }));
});
