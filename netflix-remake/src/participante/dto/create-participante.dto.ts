import { Filme } from '.prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParticipanteDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_nascimento: string;

  @IsString()
  @IsNotEmpty()
  staff: string;

  filmeid: number;
}
