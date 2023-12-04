import { useState } from 'react';
import Message from './Message';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const name = 'dummy';
  const age = 2;
  const textArr = ['a', 'b', 'c', 'd'];
  const numbArr = [1, 2, 2, 3];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let a = 0;
  const handleClick = () => {
    a++;
    console.log('huh' + a);
    setAlertVisibility(!alertVisible);
  };
  const handleClose = () => {
    setAlertVisibility(false);
  };
  return (
    <div className="container my-4">
      <Button color="secondary" onClick={handleClick}>
        A button i supposed
      </Button>
      {alertVisible && (
        <>
          <hr />

          <Alert handleClose={handleClose}>
            <h1>AAA</h1>
            <h2>weee</h2>
          </Alert>
        </>
      )}
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
