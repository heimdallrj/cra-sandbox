interface HiddenInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export default function HiddenInput({ value, ...restProps }: HiddenInputProps) {
  return <input {...restProps} type='hidden' value={value} />;
}
