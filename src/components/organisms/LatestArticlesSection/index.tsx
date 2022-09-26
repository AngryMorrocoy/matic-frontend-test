import { FunctionComponent } from 'react';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import Button from '@atoms/Button';
import Heading from '@atoms/Heading';
import ArticleCard from '@molecules/ArticleCard';
import Header from '@molecules/Header';
import { ArticleSchema } from '@api/types';

type LatestArticlesSectionProps = {
  articles: ArticleSchema[];
};

const LatestArticlesSection: FunctionComponent<LatestArticlesSectionProps> = ({
  articles,
}): JSX.Element => {
  return (
    <FlexWrapper isMain padding="5rem" direction="column" gap="2.4rem">
      <Header>
        <Heading type="h2">Latest Articles</Heading>
        <Button>+ Add New Article</Button>
      </Header>
      <GridWrapper
        justify="space-between"
        templateColumns="repeat(auto-fit, minmax(12.5rem, max-content))"
        gap="1.5rem"
      >
        {articles.map(({ id, author, title, imageUrl, content }) => (
          <ArticleCard
            author={author}
            title={title}
            imageUrl={imageUrl}
            content={content}
            key={id}
          />
        ))}
      </GridWrapper>
    </FlexWrapper>
  );
};

export default LatestArticlesSection;