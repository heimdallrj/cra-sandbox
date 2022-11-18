import clsx from 'clsx';
import { CSSProperties } from 'react';
import useConfig from '../hooks/useConfig';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  name?: string;
  style?: CSSProperties;
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  value?: string;
}

export default function TextInput({
  className,
  disabled = false,
  inputStyle,
  label,
  name,
  style,
  type = 'color',
  value,
  ...restProps
}: TextInputProps) {
  const { prefix } = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-text-input`,
        disabled && `${prefix}-text-input--disabled`,
        className
      )}
      style={style}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...restProps}
        className={`${prefix}-text-input__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type={type}
        value={value}
      />
    </div>
  );
}
