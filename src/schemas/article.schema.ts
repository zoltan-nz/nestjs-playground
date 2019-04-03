import * as mongoose from 'mongoose';
import { Article } from '../models/article';

export const ArticleSchema = new mongoose.Schema<Article>({
  id: Number,
  path: String,
  body: String,
});
