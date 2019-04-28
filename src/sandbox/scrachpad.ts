import * as mongoose from 'mongoose';
import { articleSchema } from '../schemas/article.schema';
import { Article } from '../models/article';

async function main() {
  await mongoose.connect('mongodb://localhost/nest', { useNewUrlParser: true });

  const db = mongoose.connection;

  const ArticleModel = mongoose.model('Article', articleSchema)

  const articles = await ArticleModel.find();
  console.log(articles)

  let duplicates = [];

  ArticleModel.aggregate([
    {
      $match: {$ne: ''}
    },
    {
      $group: {
        _id: { id: 'id' },
        dups: { $addToSet: '$_id' },
        count: { $sum: 1 }
      }
    }
  ])
    .exec(result => result.forEach(doc => {
      doc.dups.shift();
      doc.dups.forEach(dupId => duplicates.push(dupId))
    }));

  console.log(duplicates);
}

main();
