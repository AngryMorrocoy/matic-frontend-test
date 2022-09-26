import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const _InputText = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} type="text" />
);

const InputText = styled(_InputText)`
  padding: 0.8rem 1rem;

  border: none;
  outline: none;
  border-radius: 1rem;

  box-shadow: 0px 1px 2px #d1d5db;
`;

export default InputText;
