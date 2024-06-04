import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { CustomerService } from './customer.service';
import { CustomerController } from './CustomerController';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
