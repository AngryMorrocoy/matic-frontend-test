import styled from 'styled-components';
import { TRow } from '@atoms/Table';
import Button from '@atoms/Button';

export const StyledTRow = styled(TRow)`
  td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  td:first-child {
    font-weight: 500;
    color: var(--dark-blue);
  }

  td:nth-child(2) {
    max-width: 19.6rem;
  }

  td:nth-child(3) {
    max-width: 24rem;
  }
`;

type ActionButtonProps = {
  action: 'edit' | 'delete';
};

export const ActionButton = styled(Button)<ActionButtonProps>`
  padding: 0;
  border: none;
  background: none;
  &:hover,
  &:focus {
    background: none;
  }

  color: ${({ action }) =>
    action === 'edit' ? 'var(--success-color)' : 'var(--warning-color)'};

  display: inline;
`;
