import styled from 'styled-components';

type GridWrapperProps= {
  templateRows?: string;
  templateColumns?: string;
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'normal' | 'center' | 'flex-start' | 'flex-end';
  gap?: string;
  isMain?: boolean;
}

const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  justify-content: ${(props) => props.justify || 'normal'};
  align-items: ${(props) => props.align || 'normal'};
  gap: ${(props) => props.gap || '0'};
  grid-template-rows: ${props => props.templateRows || ''};
  grid-template-columns: ${props => props.templateColumns || ''};
  ${(props) =>
    props.isMain &&
    'padding-left: var(--sides-separation);padding-right: var(--sides-separation);'}
`;

export default GridWrapper
