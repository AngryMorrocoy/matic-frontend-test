import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

const _InputText = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} type="text" />
);

export const InputText = styled(_InputText)`
  padding: 0.8rem 1rem;

  border: none;
  outline: none;
  border-radius: 0.375rem;

  box-shadow: 0px 1px 2px var(--form-border-color);

  min-width: 100%;
  resize: vertical;

  &.invalid {
    box-shadow: 0px 0px 3px var(--warning-color);
  }
`;

export const TextArea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => <InputText as="textarea" {...props} />;
