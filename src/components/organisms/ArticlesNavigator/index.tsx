import { deleteArticle } from '@api/index';
import { ArticleSchema } from '@api/types';
import { FlexWrapper } from '@atoms/Wrappers';
import ArticleContext from '@context/ArticleContext';
import ArticleList from '@molecules/ArticleList';
import PagesNavigator from '@molecules/PagesNavigator';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const StyledPagesNavigator = styled(PagesNavigator)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border-top: 1px solid var(--table-border-color);
  box-sizing: content-box;
`;

const ArticlesNavigator: FunctionComponent<{}> = ({}): JSX.Element => {
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const paginateArticles = (articles: ArticleSchema[]): ArticleSchema[] => {
    const pageIndex = currentPage * pageSize;

    return articles.slice(pageIndex, pageIndex + pageSize);
  };

  return (
    <ArticleContext.Consumer>
      {({ articles, updateArticles }) => (
        <FlexWrapper direction="column" gap="3rem">
          <ArticleList
            articles={paginateArticles(articles)}
            onEdit={(articleId) => console.log('Editing', articleId)}
            onDelete={(articleId) => {
              const [request, _] = deleteArticle(articleId);
              const idx = articles.findIndex(({ id }) => id === articleId);

              request.then(() => {
                const newArticles = articles
                  .slice(0, idx)
                  .concat(articles.slice(idx + 1));
                updateArticles(newArticles);
              });
            }}
          />

          <StyledPagesNavigator
            pagesCount={Math.ceil(articles.length / pageSize)}
            currentPage={currentPage + 1}
            onPageChange={(newPage) => setCurrentPage(newPage - 1)}
          />
        </FlexWrapper>
      )}
    </ArticleContext.Consumer>
  );
};

export default ArticlesNavigator;
