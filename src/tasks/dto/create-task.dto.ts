import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Title is required and should not be empty' })
  title: string;

  @IsNotEmpty()
  description: string;
}
