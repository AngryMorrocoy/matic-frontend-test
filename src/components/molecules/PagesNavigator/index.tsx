import NavButton from './PagesNavigator.styles';
import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent, useState, MouseEvent } from 'react';
import { ReactComponent as LeftArrowIcon } from '@assets/icon-left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '@assets/icon-right-arrow.svg';
import styled from 'styled-components';

type ArticleListNavigatorProps = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  className?: string;
};

const PagesNavigator: FunctionComponent<ArticleListNavigatorProps> = ({
  pagesCount,
  currentPage,
  onPageChange,
  className
}): JSX.Element => {
  const [showAllNavButtons, setShowAllNavButtons] = useState(false);

  // An array with its index as values [0, 1, 2, 3, ..., n]
  let pages: number[] = [...Array(pagesCount).keys()];
  if (pagesCount > 7) {
    // Insert -1 at position 4 if there are more than 7 pages
    pages = pages.slice(0, 3).concat([-1, ...pages.slice(3)]);
  }

  const handlePageChange = (evt: MouseEvent<HTMLDivElement>) => {
    const target = evt.target as HTMLElement;
    if (target.nodeName.toLowerCase() !== 'button') return;

    if (target.classList.contains('navigator-toggler'))
      return setShowAllNavButtons(true);

    onPageChange(Number(target.textContent));
    setShowAllNavButtons(false);
  };

  const getPropsForNavButton = (
    page: number
  ): { key: number; className: string; children: string } => {
    let classes: string = '';
    if (page === 0) {
      classes = `navigator-toggler ${
        currentPage > 3 && currentPage <= pagesCount - 3 ? 'current' : ''
      }`;
    } else if (page === currentPage) classes = 'current';

    return {
      key: page,
      className: classes,
      children: page === 0 ? '...' : `${page}`,
    };
  };

  return (
    <FlexWrapper
      className={className}
      justify="space-between"
      padding="1rem"
    >
      <FlexWrapper
        as={NavButton}
        onClick={() => onPageChange(currentPage - 1)}
        align="center"
        gap="0.8rem"
      >
        <LeftArrowIcon />
        Prev
      </FlexWrapper>
      <FlexWrapper
        className={`article-navigator__container ${
          showAllNavButtons ? 'show-all' : ''
        }`}
        gap="2rem"
        align="center"
        justify="center"
        onClick={handlePageChange}
      >
        {pages.map((value) => (
          <NavButton {...getPropsForNavButton(value + 1)} />
        ))}
      </FlexWrapper>
      <FlexWrapper
        as={NavButton}
        gap="0.8rem"
        onClick={() => onPageChange(currentPage + 1)}
        align="center"
      >
        Next
        <RightArrowIcon />
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default styled(PagesNavigator)`
  width: 100%;
`;
