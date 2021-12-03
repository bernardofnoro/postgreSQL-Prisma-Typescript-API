import { PartialType } from '@nestjs/mapped-types';
import { CreateParticipanteDto } from './create-participante.dto';

export class UpdateParticipanteDto extends PartialType(CreateParticipanteDto) {}
