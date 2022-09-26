import Heading from '@atoms/Heading';
import OrdinaryText from '@atoms/OrdinaryText';
import { FlexWrapper, GridWrapper } from '@atoms/Wrappers';
import CreateArticleForm from '@organisms/CreateArticleForm';
import { FunctionComponent } from 'react';

const CreateArticle: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <FlexWrapper
      isMain
      direction="column"
      bg="var(--hero-bg)"
      padding="4.25rem"
      gap="4.5rem"
    >
      <GridWrapper as="header" gap="1.25rem">
        <Heading type="h1">Add New Blog Article</Heading>
        <OrdinaryText size="normal">
          Publish a new blog article to feature in the Easybank homepage.
        </OrdinaryText>
      </GridWrapper>

      <FlexWrapper align="center" justify="center">
        <CreateArticleForm />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default CreateArticle;
