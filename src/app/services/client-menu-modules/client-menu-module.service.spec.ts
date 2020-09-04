import { TestBed } from '@angular/core/testing';

import { ClientMenuModuleService } from './client-menu-module.service';

describe('ClientMenuModuleService', () => {
  let service: ClientMenuModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientMenuModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
