// Utilities
import { useEffect, useState } from 'react';
import { ArticleSchema } from '@api/types';
import { getArticles } from './api';
// Components
import MainHeader from '@organisms/MainHeader';
import MainHero from '@organisms/MainHero';
import WhySection from '@organisms/WhySection';
import LatestArticlesSection from '@organisms/LatestArticlesSection';
import MainFooter from '@organisms/MainFooter';

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
        console.log(err);
      });

    return () => {
      if (!finished) abort.abort('Request canceled');
    };
  }, []);

  return (
    <>
      <MainHeader />

      <MainHero />
      <WhySection />

      <LatestArticlesSection articles={articles.slice(0, 4)} />
      <MainFooter />
    </>
  );
}

export default App;
