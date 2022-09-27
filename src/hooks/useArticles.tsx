import { ArticleSchema } from '@api/types';
import { useEffect, useState } from 'react';
import { getArticles } from '@api/index';
import axios from 'axios';

type UseArticlesReturn = {
  articles: ArticleSchema[];
  setArticles: (newArticles: ArticleSchema[]) => void;
};

export default function useArticles(): UseArticlesReturn {
  const [articles, setArticles] = useState<ArticleSchema[]>([]);
  const [shouldUpdate, setShouldUpdate] = useState<boolean>(true);

  useEffect(() => {
    let finished = false;
    const [request, abort] = getArticles();

    const retrieveAndUpdateArticles = async () => {
      try {
        const { data: response } = await request;
        setArticles(response.data);

        finished = true;
      } catch (err) {
        if (axios.isCancel(err)) return;
      }
    };

    retrieveAndUpdateArticles();

    return () => {
      if (!finished) abort.abort();
    };
  }, [shouldUpdate]);

  return {
    articles,
    setArticles: (newArticles) => {
      setArticles(newArticles);
      setShouldUpdate(!shouldUpdate);
    },
  };
}
