import { ArticlePostDataSchema } from '@api/types';
import Button from '@atoms/Button';
import { InputText, TextArea } from '@atoms/InputText';
import { GridWrapper } from '@atoms/Wrappers';
import FormRow from '@molecules/FormRow';
import { FormEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

type CreateArticleFormProps = {
  className?: string;
  onSubmit: (
    newArticle: ArticlePostDataSchema,
    setFinished: () => void
  ) => void;
};

const CreateArticleForm: FunctionComponent<CreateArticleFormProps> = ({
  className,
  onSubmit,
}): JSX.Element => {
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSubmitted(true);
    if (![author, title, content].every((v) => v)) return;

    onSubmit(
      {
        author,
        title,
        content,
      },
      () => {
        setAuthor('');
        setTitle('');
        setContent('');
        setSubmitted(false);
      }
    );
  };

  return (
    <GridWrapper
      as="form"
      className={className}
      gap="1.5rem"
      bg="white"
      padding="2.6rem 4.5rem"
      onSubmit={handleSubmit}
    >
      <FormRow label="Author">
        <InputText
          className={submitted && !author ? 'invalid' : ''}
          onChange={(evt) => setAuthor(evt.target.value)}
          value={author}
          id="authorInput"
          name="author"
        />
      </FormRow>
      <FormRow label="Blog Title">
        <InputText
          className={submitted && !title ? 'invalid' : ''}
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
          id="titleInput"
          name="title"
        />
      </FormRow>
      <FormRow label="Blog Content">
        <TextArea
          className={submitted && !content ? 'invalid' : ''}
          onChange={(evt) => setContent(evt.target.value)}
          value={content}
          id="contentInput"
          name="content"
          rows={16}
        />
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
