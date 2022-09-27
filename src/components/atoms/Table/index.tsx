import styled from 'styled-components';

export const Table = styled.table`
  color: var(--table-default-fg);
  text-align: left;
  font-size: 0.8rem;
  border-radius: 0.5rem;

  box-shadow: var(--table-box-shadow);

  & th,
  & td {
    padding: 1rem 1.5rem;
  }

  & tr:first-child th:first-child {
    border-top-left-radius: 0.5rem;
  }

  & tr:first-child th:last-child {
    border-top-right-radius: 0.5rem;
  }

  & tr:last-child td:first-child {
    border-bottom-left-radius: 0.5rem;
  }

  & tr:last-child td:last-child {
    border-bottom-right-radius: 0.5rem;
  }
`;

export const TRow = styled.tr`
  td,
  th {
    font-weight: 400;
  }
`;

export const THead = styled.thead`
  position: relative;

  th, td {
    background-color: var(--table-heading-bg);
    font-weight: 500;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-transform: uppercase;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: calc(100% - 1px);

    background: var(--table-border-color);
  }
`;

export const TBody = styled.tbody`
  tr:nth-child(odd) th,
  tr:nth-child(odd) td {
    background-color: var(--table-odd-row-bg);
  }

  tr:nth-child(even) th,
  tr:nth-child(even) td {
    background-color: var(--table-even-row-bg);
  }
`;
