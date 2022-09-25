import styled from 'styled-components';

type FlexWrapperProps = {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'normal' | 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  gap?: string;
  isMain?: boolean;
};

const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'normal'};
  align-items: ${(props) => props.align || 'normal'};
  gap: ${(props) => props.gap || '0'};
  ${(props) =>
    props.isMain &&
    'padding-left: var(--sides-separation);padding-right: var(--sides-separation);'}
`;

export default FlexWrapper;
