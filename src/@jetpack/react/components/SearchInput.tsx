interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput(props: SearchInputProps) {
  return <input {...props} type='search' />;
}
