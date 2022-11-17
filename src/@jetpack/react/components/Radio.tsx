import clsx from 'clsx';
import { CSSProperties } from 'react';
import useConfig from '../hooks/useConfig';

interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  inputStyle?: CSSProperties;
  label?: string;
  style?: CSSProperties;
  value?: string;
}

export default function Radio({
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
        `${prefix}-radio`,
        checked && `${prefix}-radio--checked`,
        disabled && `${prefix}-radio--disabled`,
        className
      )}
      style={style}
    >
      <input
        {...restProps}
        checked={checked}
        className={`${prefix}-radio__input`}
        disabled={disabled}
        style={inputStyle}
        type='radio'
        value={value}
      />
      {label && <label className={`${prefix}-radio__label`}>{label}</label>}
    </div>
  );
}
