import { useState } from 'react';

function ListGroup() {
  const [selectedItem, setSelectedItem] = useState(-1);
  const items = ['a', 'b', 'c', 'd'];
  return (
    <div className="container ">
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedItem === index
                ? 'active list-group-item'
                : ' list-group-item '
            }
            onClick={() => setSelectedItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    //ctrl + D to select the same text
  );
}
export default ListGroup;
