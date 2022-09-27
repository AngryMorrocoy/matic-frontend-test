import { createContext } from 'react';
import { ArticleSchema } from '@api/types';

type ArticleContextInterface = {
  articles: ArticleSchema[];
  updateArticles: (newArticles: ArticleSchema[]) => void;
};

const ArticleContext = createContext<ArticleContextInterface>({
  articles: [],
  updateArticles: () => {},
});
export default ArticleContext;
