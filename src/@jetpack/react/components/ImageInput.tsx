interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  alt?: string;
  name?: string;
  src: string;
}

export default function ImageInput({
  alt,
  name,
  src,
  ...restProps
}: ImageInputProps) {
  return (
    <input
      {...restProps}
      alt={alt || name || src}
      name={name}
      src={src}
      type='image'
    />
  );
}
