import styled from 'styled-components';

interface WrapperBaseProps {
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'normal' | 'center' | 'flex-start' | 'flex-end' | 'start' | 'end';
  gap?: string;
  isMain?: boolean;
  bg?: string;
  padding?: string;
}

const WrapperBase = styled.div<WrapperBaseProps>`
  justify-content: ${(props) => props.justify || 'normal'};
  align-items: ${(props) => props.align || 'normal'};
  gap: ${(props) => props.gap || '0'};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) =>
    props.isMain &&
    `padding-left: var(--sides-separation);
    padding-right: var(--sides-separation);`}
  ${(props) => props.bg && `background: ${props.bg};`}
`;

interface GridWrapperProps extends WrapperBaseProps {
  templateRows?: string;
  templateColumns?: string;
}

export const GridWrapper = styled(WrapperBase)<GridWrapperProps>`
  display: grid;
  grid-template-rows: ${(props) => props.templateRows || ''};
  grid-template-columns: ${(props) => props.templateColumns || ''};
`;

interface FlexWrapperProps extends WrapperBaseProps {
  direction?: 'row' | 'column';
}

export const FlexWrapper = styled(WrapperBase)<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
`;
