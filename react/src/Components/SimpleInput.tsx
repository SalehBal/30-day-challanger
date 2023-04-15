import { Controller, Control } from 'react-hook-form';
import { TextField } from '@mui/material';

interface componentProps {
  control: any;
  field: string;
  label: string;
  type?: string;
  req?: boolean;
}

function SimpleInput(props: componentProps) {
  return (
    <Controller
      name={props.field}
      control={props.control}
      rules={{ required: props.req || false }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <TextField
          value={value}
          inputRef={ref}
          fullWidth={true}
          type={props.type}
          onChange={onChange}
          error={error?.type === 'required'}
          label={error?.type === 'required' ? `${props.label} is required!` : `${props.label}`}
        />
      )}
    />
  );
}

export default SimpleInput;
