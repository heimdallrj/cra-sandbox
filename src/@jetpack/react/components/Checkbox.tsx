import clsx from 'clsx';
import { CSSProperties } from 'react';
import useConfig from '../hooks/useConfig';

interface Props extends React.HTMLProps<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  style?: CSSProperties;
  value?: string;
}

export default function Checkbox({
  checked = false,
  className,
  disabled = false,
  inputStyle,
  label,
  style,
  value,
  ...restProps
}: Props) {
  const { prefix } = useConfig();
  return (
    <div
      className={clsx(
        `${prefix}-checkbox`,
        checked && `${prefix}-checkbox--cheched`,
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
        style={inputStyle}
        type='checkbox'
        value={value}
      />
      {label && <label className={`${prefix}-checkbox__label`}>{label}</label>}
    </div>
  );
}
