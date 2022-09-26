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

    request
      .then(({ data: response }) => {
        finished = true;
        setArticles(response.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Canceled: ', err.message);
        }
      });

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
      <LatestArticlesSection articles={articles.slice(0, 4)} />
      <MainFooter />
    </>
  );
}

export default App;
