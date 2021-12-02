import { Test, TestingModule } from '@nestjs/testing';
import { PartipanteController } from './partipante.controller';
import { PartipanteService } from './partipante.service';

describe('PartipanteController', () => {
  let controller: PartipanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartipanteController],
      providers: [PartipanteService],
    }).compile();

    controller = module.get<PartipanteController>(PartipanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
