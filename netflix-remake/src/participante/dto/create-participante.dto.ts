import { IsInt, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateParticipanteDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsDate()
  data_nascimento: Date;

  @IsString()
  @IsNotEmpty()
  staff: string;
}
