import styled from 'styled-components';

type CircularSvgIconProps = {
  bg?: string;
  size?: string;
  padding?: string;
};

const CircularSvgIcon = styled.img<CircularSvgIconProps>`
  background: ${(props) => (props.bg ? props.bg : 'none')};
  border-radius: 50%;

  ${({ size }) =>
    size &&
    `
    width: ${size};
    height: ${size};
  `}
  ${({ padding }) => padding && `padding: ${padding};`}
`;

export default CircularSvgIcon;
