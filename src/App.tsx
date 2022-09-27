// Routing imports
import MainHeader from '@organisms/MainHeader';
import LatestArticlesSection from '@organisms/LatestArticlesSection';
import MainFooter from '@organisms/MainFooter';
import { Outlet } from 'react-router-dom';
import useArticles from '@hooks/useArticles';
import ArticleContext from '@context/ArticleContext';
import { sortArticlesByDate } from './utils';

function App() {
  const { articles, setArticles } = useArticles();

  return (
    <>
      <MainHeader />
      <ArticleContext.Provider
        value={{ articles, updateArticles: setArticles }}
      >
        <Outlet />
      </ArticleContext.Provider>
      <LatestArticlesSection
        articles={sortArticlesByDate(articles).slice(0, 4)}
      />
      <MainFooter />
    </>
  );
}

export default App;
