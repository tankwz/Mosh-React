import { useState } from 'react';

interface Props<A> {
  arr: A[];
  heading: string;
}

function ListGroup<T>({ arr, heading }: Props<T>) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <div className="container ">
      <ul className="list-group">
        <li className="list-group-item list-group-item-info"> {heading} </li>
        {arr.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${
              selectedItem === index ? 'active' : ''
            }`}
            onClick={() => setSelectedItem(index)}
          >
            {String(item)}
          </li>
        ))}
      </ul>
    </div>
    //ctrl + D to select the same text
  );
}
export default ListGroup;
