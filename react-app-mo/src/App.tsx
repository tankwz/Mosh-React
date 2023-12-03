import Message from './Message';
import ListGroup from './components/ListGroup';

function App() {
  const name = 'dummy';
  const age = 2;
  return (
    <div>
      <Message name={name} age={age} />
      <hr />
      <ListGroup></ListGroup>
    </div>
  );
}
export default App;
