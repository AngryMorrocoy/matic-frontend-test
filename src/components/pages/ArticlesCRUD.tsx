import { createArticle } from '@api/index';
import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import ArticleContext from '@context/ArticleContext';
import ArticlesNavigator from '@organisms/ArticlesNavigator';
import CreateArticleForm from '@organisms/CreateArticleForm';
import { FunctionComponent } from 'react';

const ArticlesCrud: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <>
      <FlexWrapper
        isMain
        direction="column"
        bg="var(--hero-bg)"
        padding="4.25rem"
        gap="4.5rem"
      >
        <GridWrapper as="header" gap="1.25rem">
          <Heading type="h2">Add New Blog Article</Heading>
          <OrdinaryText size="normal">
            Publish a new blog article to feature in the Easybank homepage.
          </OrdinaryText>
        </GridWrapper>

        <FlexWrapper align="center" justify="center">
          <ArticleContext.Consumer>
            {({ articles, updateArticles }) => (
              <CreateArticleForm
                onSubmit={(newArticle, setFinished) => {
                  const [request, _] = createArticle({ ...newArticle });

                  request.then(({ data }) => {
                    updateArticles([...articles, data.data]);
                    setFinished();
                  });
                }}
              />
            )}
          </ArticleContext.Consumer>
        </FlexWrapper>
        <FlexWrapper direction="column" gap="3.5rem">
          <GridWrapper gap="1.25rem">
            <Heading type="h2">Previous Articles</Heading>
            <OrdinaryText size="normal">
              Review and edit previous blog posts published on to the homepage.
            </OrdinaryText>
          </GridWrapper>
          <ArticlesNavigator />
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};

export default ArticlesCrud;
