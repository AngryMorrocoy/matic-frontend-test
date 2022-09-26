import { LabelHTMLAttributes } from 'react';
import OrdinaryText from '@atoms/OrdinaryText';
import styled from 'styled-components';

const _Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => (
  <OrdinaryText as="label" size="tiny" {...props} color="var(--dark-blue)">
    {props.children}
  </OrdinaryText>
);

const FormLabel = styled(_Label)`
  font-weight: 500;
`;

export default FormLabel;
