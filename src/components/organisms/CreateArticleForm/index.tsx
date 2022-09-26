import Button from '@atoms/Button';
import { InputText, TextArea } from '@atoms/InputText';
import { GridWrapper } from '@atoms/Wrappers';
import FormRow from '@molecules/FormRow';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type CreateArticleFormProps = {
  className?: string;
};

const CreateArticleForm: FunctionComponent<CreateArticleFormProps> = ({
  className,
}): JSX.Element => {
  return (
    <GridWrapper
      as="form"
      className={className}
      gap="1.5rem"
      bg="white"
      padding="2.6rem 4.5rem"
    >
      <FormRow label="Author">
        <InputText id="authorInput" name="author" />
      </FormRow>
      <FormRow label="Blog Title">
        <InputText id="titleInput" name="title" />
      </FormRow>
      <FormRow label="Blog Content">
        <TextArea id="contentInput" name="content" rows={16} />
      </FormRow>

      <Button as="input" type="submit" value="Save" />
    </GridWrapper>
  );
};

export default styled(CreateArticleForm)`
  border-radius: 2.6rem;
  box-shadow: 0px 4px 4px var(--form-border-color);
  min-width: 49%;
  max-width: 44rem;

  & input[type='submit'] {
    margin-top: 0.5rem;
  }
`;
