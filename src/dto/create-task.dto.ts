import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString() //@IsString() es Funcionalidad de Class Validator , para la validacion del Dto (date transfer object)... Es decir validacion de datos que envia el cliente , es decir , recibe el back.
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsOptional()
  done: boolean;
}
