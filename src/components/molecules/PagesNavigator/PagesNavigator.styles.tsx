import styled from 'styled-components';
import { BaseButton } from '@atoms/Button';

const NavButton = styled(BaseButton)`
  --normal-color: #6b7280;
  --current-color: #84e1a7;
  position: relative;
  font-weight: 500;
  font-size: 1rem;

  height: 100%;
  color: var(--normal-color);

  &.current {
    color: var(--current-color);
  }

  .article-navigator__container &:nth-child(n + 5):nth-last-child(n + 4),
  .article-navigator__container.show-all &.navigator-toggler {
    display: none;
  }

  .article-navigator__container.show-all
    &:nth-child(n + 5):nth-last-child(n + 4) {
    display: block;
  }

  .article-navigator__container &:nth-child(n + 5):nth-last-child(n + 4) {
    display: none;
  }

  &.current::after {
    content: '';
    position: absolute;
    top: -1rem;
    left: 0;
    right: 0;
    bottom: calc(100% + 0.8rem);

    background: var(--current-color);
  }
`;

export default NavButton;
