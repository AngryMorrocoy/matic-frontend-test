import NavButton from './PagesNavigator.styles';
import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent, useState, MouseEvent } from 'react';

type ArticleListNavigatorProps = {
  pagesCount: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const PagesNavigator: FunctionComponent<ArticleListNavigatorProps> = ({
  pagesCount,
  currentPage,
  onPageChange,
}): JSX.Element => {
  const [showAllNavButtons, setShowAllNavButtons] = useState(false);

  let pages: number[] = [...Array(pagesCount).keys()];
  if (pagesCount > 7) {
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
    let className: string = '';
    if (page === 0) {
      className = `navigator-toggler ${
        currentPage > 3 && currentPage <= pagesCount - 3 ? 'current' : ''
      }`;
    } else if (page === currentPage) className = 'current';

    return {
      key: page,
      className,
      children: page === 0 ? '...' : `${page}`,
    };
  };

  return (
    <FlexWrapper
      justify="space-between"
      style={{ width: '100%' }}
      padding="1rem"
    >
      <NavButton onClick={() => onPageChange(currentPage - 1)}>Prev</NavButton>
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
      <NavButton onClick={() => onPageChange(currentPage + 1)}>Next</NavButton>
    </FlexWrapper>
  );
};

export default PagesNavigator;
