import Message from './Message';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const name = 'dummy';
  const age = 2;
  const textArr = ['a', 'b', 'c', 'd'];
  const numbArr = [1, 2, 2, 3];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container my-4">
      <Alert>
        <h1>AAA</h1>
        <h2>we</h2>
      </Alert>
      <hr />
      <Message name={name} age={age} />
      <hr />
      <ListGroup
        arr={textArr}
        heading="text"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <hr />

      <ListGroup
        arr={numbArr}
        heading="number"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}
export default App;
