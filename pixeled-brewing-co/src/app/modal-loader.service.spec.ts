import { TestBed } from '@angular/core/testing';

import { ModalLoaderService } from './modal-loader.service';

describe('ModalLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalLoaderService = TestBed.get(ModalLoaderService);
    expect(service).toBeTruthy();
  });
});
