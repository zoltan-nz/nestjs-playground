import { Document } from 'mongoose';

export interface Article extends Document {
  readonly id: number;
  readonly path: string;
  readonly body: string;
}
