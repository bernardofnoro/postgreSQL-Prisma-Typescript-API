import { Injectable } from '@nestjs/common';
import { CreatePartipanteDto } from './dto/create-partipante.dto';
import { UpdatePartipanteDto } from './dto/update-partipante.dto';

@Injectable()
export class PartipanteService {
  create(createPartipanteDto: CreatePartipanteDto) {
    return 'This action adds a new partipante';
  }

  findAll() {
    return `This action returns all partipante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partipante`;
  }

  update(id: number, updatePartipanteDto: UpdatePartipanteDto) {
    return `This action updates a #${id} partipante`;
  }

  remove(id: number) {
    return `This action removes a #${id} partipante`;
  }
}
