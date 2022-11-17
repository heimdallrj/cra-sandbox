import clsx from 'clsx';
import useConfig from '../hooks/useConfig';

interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  label?: string;
  value?: string;
}

export default function Radio({
  checked = false,
  className,
  label,
  value,
  ...restProps
}: Props) {
  const { prefix } = useConfig();
  return (
    <div className={clsx(`${prefix}-radio`, className)}>
      <input
        {...restProps}
        type='radio'
        className={`${prefix}-radio__input`}
        value={value}
        checked={checked}
      />
      {label && <label className={`${prefix}-radio__label`}>{label}</label>}
    </div>
  );
}
