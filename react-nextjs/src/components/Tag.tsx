export default function Tag({ text }: { text: string }): JSX.Element {
  return <span className="p-small !text-blue-600">{text}</span>;
}
