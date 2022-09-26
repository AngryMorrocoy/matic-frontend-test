import OrdinaryText from '@atoms/OrdinaryText';
import Heading from '@atoms/Heading';
import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type ArticleCardProps = {
  className?: string;
  author: string;
  title: string;
  imageUrl: string;
  content: string;
};

const CardImg = styled.img`
  width: 100%;
  min-height: 43%;
  max-height: 43%;
  border-radius: inherit;
  overflow: hidden;
`;

const CardContent = styled(OrdinaryText)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  className,
  author,
  title,
  imageUrl,
  content,
}): JSX.Element => {
  return (
    <FlexWrapper className={className} direction="column">
      <CardImg src={imageUrl} alt="" />
      <FlexWrapper direction="column" padding="2.2rem 1.625rem 1.2rem">
        <OrdinaryText as="span" size="diminute" lineHeight="1.1rem">
          By {author}
        </OrdinaryText>
        <Heading type="h4">{title}</Heading>
        <CardContent size="tiny">{content}</CardContent>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default styled(ArticleCard)`
  --radius: 0.5rem;
  max-width: 17rem;
  border-radius: var(--radius) var(--radius) 0 0;
`;
