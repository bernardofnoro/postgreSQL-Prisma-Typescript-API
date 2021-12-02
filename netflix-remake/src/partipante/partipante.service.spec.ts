import { Test, TestingModule } from '@nestjs/testing';
import { PartipanteService } from './partipante.service';

describe('PartipanteService', () => {
  let service: PartipanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartipanteService],
    }).compile();

    service = module.get<PartipanteService>(PartipanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
