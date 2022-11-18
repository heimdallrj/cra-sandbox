import clsx from 'clsx';
import { CSSProperties } from 'react';
import useConfig from '../hooks/useConfig';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  name?: string;
  style?: CSSProperties;
  value?: string;
}

export default function Checkbox({
  checked = false,
  className,
  disabled = false,
  inputStyle,
  label,
  name,
  style,
  value,
  ...restProps
}: CheckboxProps) {
  const { prefix } = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-checkbox`,
        checked && `${prefix}-checkbox--checked`,
        disabled && `${prefix}-checkbox--disabled`,
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        checked={checked}
        className={`${prefix}-checkbox__input`}
        disabled={disabled}
        name={name}
        style={inputStyle}
        type='checkbox'
        value={value}
      />
      {label && (
        <label className={`${prefix}-checkbox__label`} htmlFor={name}>
          {label}
        </label>
      )}
    </div>
  );
}
