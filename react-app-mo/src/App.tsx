import Message from './Message';

function App() {
  const name = 'dummy';
  const age = 2;
  return (
    <div>
      <Message name={name} age={age} />
    </div>
  );
}
export default App;
