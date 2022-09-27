import { ArticleSchema } from '@api/types';
import { Table, TBody, THead, TRow } from '@atoms/Table';
import { GridWrapper } from '@atoms/Wrappers';
import { formatDateAsDDYYMM } from '@utils/index';
import { FunctionComponent, MouseEvent } from 'react';
import { ActionButton, StyledTRow } from './ArticleList.styles';

type ArticleListProps = {
  className?: string;
  articles: ArticleSchema[];
  onEdit: (articleId: string) => void;
  onDelete: (articleId: string) => void;
};

const ArticleList: FunctionComponent<ArticleListProps> = ({
  className,
  articles,
  onDelete,
  onEdit,
}): JSX.Element => {
  const columnTitles = ['author name', 'title', 'content', 'date'];

  const handleClick = (evt: MouseEvent<HTMLTableElement>) => {
    const target = evt.target as HTMLElement;
    if (!target.classList.contains('action-button')) return;

    const action = target.getAttribute('action');

    // Go up in the elements tree until finds the first 'tr' parent
    let curr = target;
    while (curr && curr.nodeName.toLowerCase() !== 'tr') {
      curr = curr.parentNode as HTMLElement;
    }

    // Grab the id of that 'tr' tag (Which is the one of an article)
    let articleId = curr.id;

    if (action === 'delete') onDelete(articleId);
    if (action === 'edit') onEdit(articleId);
  };

  return (
    <Table className={className} cellSpacing="0" onClick={handleClick}>
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
            <StyledTRow key={idx} id={id}>
              <td>{author}</td>
              <td>{title}</td>
              <td>{content}</td>
              <td>{formatDateAsDDYYMM(date)}</td>
              <td>
                <GridWrapper gap="1rem" templateColumns="repeat(2, auto)">
                  <ActionButton className="action-button" action="edit">
                    Edit
                  </ActionButton>
                  <ActionButton className="action-button" action="delete">
                    Delete
                  </ActionButton>
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
