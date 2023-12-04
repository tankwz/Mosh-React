interface Props {
  name: string;
  age: number;
}
function Message({ name, age }: Props) {
  return (
    <>
      {name}
      <h2>{age}</h2>
    </>
  );
}
export default Message;
