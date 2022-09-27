// Routing imports
import MainHeader from '@organisms/MainHeader';
import LatestArticlesSection from '@organisms/LatestArticlesSection';
import MainFooter from '@organisms/MainFooter';
import { useState, useEffect } from 'react';
import { ArticleSchema } from '@api/types';
import { getArticles } from './api';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState<ArticleSchema[]>([]);

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
  }, []);

  return (
    <>
      <MainHeader />
      <>
        <Outlet />
      </>
      <LatestArticlesSection
        articles={articles.slice(articles.length - 4).reverse()}
      />
      <MainFooter />
    </>
  );
}

export default App;
