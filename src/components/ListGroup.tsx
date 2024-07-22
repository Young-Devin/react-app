//import { MouseEvent } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

// { items; [], heading; string } //interface
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  let navigate = useNavigate();
  const routeChange = (item: string) => {
    let path = "/Home";
    if (item === "About me") {
      path = "/AboutMe";
    } else {
      path = "/Home";
    }

    navigate(path);
  };

  return (
    <>
      <h1 className="banner-top">{heading}</h1>
      {items.length === 0 && <p>No Item found</p>}
      <div className="side-menu">
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
                routeChange(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
