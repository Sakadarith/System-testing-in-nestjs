
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestDocument = Document<Test>;

@Schema()
export class Test {
  @Prop()
  name: string;

  @Prop()
  furType: string;
}
export const TestSchema = SchemaFactory.createForClass(Test);
