import { ArticleSchema } from '@api/types';
import { Table, TBody, THead, TRow } from '@atoms/Table';
import { GridWrapper } from '@atoms/Wrappers';
import { formatDateAsDDYYMM } from '@utils/index';
import { FunctionComponent } from 'react';
import { ActionButton, StyledTRow } from './ArticleList.styles';

type ArticleListProps = {
  className?: string;
  articles: ArticleSchema[];
};

const ArticleList: FunctionComponent<ArticleListProps> = ({
  className,
  articles,
}): JSX.Element => {
  const columnTitles = ['author name', 'title', 'content', 'date'];

  return (
    <Table className={className} cellSpacing="0">
      <THead>
        <TRow>
          {columnTitles.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </TRow>
      </THead>
      <TBody>
        {articles.map(
          ({ author, title, content, createdAt: date, id }, idx) => (
            <StyledTRow key={idx}>
              <td>{author}</td>
              <td>{title}</td>
              <td>{content}</td>
              <td>{formatDateAsDDYYMM(date)}</td>
              <td>
                <GridWrapper gap="1rem" templateColumns="repeat(2, auto)">
                  <ActionButton action="edit">Edit</ActionButton>
                  <ActionButton action="delete">Delete</ActionButton>
                </GridWrapper>
              </td>
            </StyledTRow>
          )
        )}
      </TBody>
    </Table>
  );
};

export default ArticleList;
