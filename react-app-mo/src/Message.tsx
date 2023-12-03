interface Props {
  name: string;
  age: number;
}
function Message({ name, age }: Props) {
  return (
    <h1>
      {name}
      <h2>{age}</h2>
    </h1>
  );
}
export default Message;
