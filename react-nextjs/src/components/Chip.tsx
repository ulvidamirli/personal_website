export default function Chip({ text }: { text: string }): JSX.Element {
  return (
    <span className="p-xsmall bg-gray-100 px-3 py-1 rounded-full">{text}</span>
  );
}
