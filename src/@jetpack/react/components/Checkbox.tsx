import clsx from 'clsx';
import useConfig from '../hooks/useConfig';

interface Props extends React.ButtonHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  label?: string;
  value?: string;
}

export default function Checkbox({
  checked = false,
  className,
  label,
  value,
  ...restProps
}: Props) {
  const { prefix } = useConfig();
  return (
    <div className={clsx(`${prefix}-checkbox`, className)}>
      <input
        {...restProps}
        type='checkbox'
        className={`${prefix}-checkbox-input`}
        value={value}
        checked={checked}
      />
      {label && <label className={`${prefix}-checkbox-label`}>{label}</label>}
    </div>
  );
}
