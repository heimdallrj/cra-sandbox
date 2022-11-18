interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min: string;
  max: string;
}

export default function RangeInput({
  max,
  min,
  ...restProps
}: RangeInputProps) {
  return <input {...restProps} type='range' min={min} max={max} />;
}
