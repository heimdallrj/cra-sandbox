interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max: number;
  step?: number;
}

export default function RangeInput({
  max,
  min = 0,
  step = 0,
  ...restProps
}: RangeInputProps) {
  return <input {...restProps} type='range' min={min} max={max} step={step} />;
}
