interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function FileInput(props: FileInputProps) {
  return <input {...props} type='file' />;
}
