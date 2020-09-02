import { TestBed } from '@angular/core/testing';

import { RecipeAppService } from './recipe-app.service';

describe('RecipeAppService', () => {
  let service: RecipeAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
