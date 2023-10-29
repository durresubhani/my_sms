import { Category } from './category.entity';

import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';

describe('ProductsService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});