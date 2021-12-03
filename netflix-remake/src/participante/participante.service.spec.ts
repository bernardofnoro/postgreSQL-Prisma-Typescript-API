import { Test, TestingModule } from '@nestjs/testing';
import { ParticipanteService } from './participante.service';

describe('ParticipanteService', () => {
  let service: ParticipanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipanteService],
    }).compile();

    service = module.get<ParticipanteService>(ParticipanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
