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
};

const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'normal'};
  align-items: ${(props) => props.align || 'normal'};
  gap: ${(props) => props.gap || '0'};
`;

export default FlexWrapper;
