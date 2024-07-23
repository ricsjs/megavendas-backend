import { IsString, IsArray, IsNotEmpty } from 'class-validator';
import { CreateContactDto } from './create-contact.dto';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  contacts: CreateContactDto[];
}
