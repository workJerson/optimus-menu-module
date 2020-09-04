import { TestBed } from '@angular/core/testing';

import { ModuleGroupService } from './module-group.service';

describe('ModuleGroupService', () => {
  let service: ModuleGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
