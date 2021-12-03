import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipanteService {
  create(createParticipanteDto: CreateParticipanteDto) {
    return 'This action adds a new participante';
  }

  findAll() {
    return `This action returns all participante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} participante`;
  }

  update(id: number, updateParticipanteDto: UpdateParticipanteDto) {
    return `This action updates a #${id} participante`;
  }

  remove(id: number) {
    return `This action removes a #${id} participante`;
  }
}
