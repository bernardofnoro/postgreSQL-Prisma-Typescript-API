import { PartialType } from '@nestjs/mapped-types';
import { CreatePartipanteDto } from './create-partipante.dto';

export class UpdatePartipanteDto extends PartialType(CreatePartipanteDto) {}
