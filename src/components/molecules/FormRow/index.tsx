import FormLabel from '@atoms/FormLabel';
import { FlexWrapper } from '@atoms/Wrappers';
import { FunctionComponent } from 'react';

type FormRowProps = {
  className?: string;
  children: JSX.Element;
  label: string;
};

const FormRow: FunctionComponent<FormRowProps> = ({
  className,
  children,
  label,
}): JSX.Element => {

  const childId = children.props.id;

  return (
    <FlexWrapper className={className} direction="column" gap="0.25rem">
      <FormLabel htmlFor={childId}>{label}</FormLabel>
      {children}
    </FlexWrapper>
  );
};

export default FormRow;
