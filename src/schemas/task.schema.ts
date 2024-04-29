import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Task {
  @Prop({ unique: true, required: true, trim: true }) //trim elimina los espacios del inicio y final de un strig . ejemplo : "  stringConEspacios  "
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ default: false })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
