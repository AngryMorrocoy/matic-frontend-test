// Routing imports
import MainHeader from '@organisms/MainHeader';
import LatestArticlesSection from '@organisms/LatestArticlesSection';
import MainFooter from '@organisms/MainFooter';
import { Outlet } from 'react-router-dom';
import useArticles from '@hooks/useArticles';

function App() {
  const { articles, setArticles } = useArticles();

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
