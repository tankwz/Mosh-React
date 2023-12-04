import Message from './Message';
import ListGroup from './components/ListGroup';

function App() {
  const name = 'dummy';
  const age = 2;
  const textArr = ['a', 'b', 'c', 'd'];
  const numbArr = [1, 2, 2, 3];

  return (
    <div>
      <Message name={name} age={age} />
      <hr />
      <ListGroup arr={textArr} heading="text"></ListGroup>
      <hr />

      <ListGroup arr={numbArr} heading="number"></ListGroup>
    </div>
  );
}
export default App;
