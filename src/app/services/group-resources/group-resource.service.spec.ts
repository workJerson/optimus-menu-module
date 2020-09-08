import { TestBed } from '@angular/core/testing';

import { GroupResourceService } from './group-resource.service';

describe('GroupResourceService', () => {
  let service: GroupResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
