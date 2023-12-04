import { useState } from 'react';

interface Props<A> {
  arr: A[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup<T>({ arr, heading, onSelectItem }: Props<T>) {
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
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(String(item));
            }}
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
