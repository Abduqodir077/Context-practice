import React from "react";
import { useState } from "react";

export const ContextData = React.createContext();

function Context({ children }) {


  let [data, setData] = useState([
    {
      id: 1,
      img: "https://cdn-images.farfetch-contents.com/17/35/32/50/17353250_37211685_1000.jpg",
      par: "Philipp Plein",
      span: "hexagon logo backpack",
      price: "762$",
      count: 0,
    },
    {
      id: 2,
      img: "https://cdn-images.farfetch-contents.com/17/35/23/89/17352389_36459546_1000.jpg",
      par: "Philipp Plein",
      span: "all-over mixed-patches backpack",
      price: "611$",
      count: 0,
    },
    {
      id: 3,
      img: "https://cdn-images.farfetch-contents.com/17/58/42/75/17584275_37513771_1000.jpg",
      par: "Philipp Plein",
      span: "logo-print backpack",
      price: "643$",
      count: 0,
    },
    {
      id: 4,
      img: "https://cdn-images.farfetch-contents.com/16/55/95/43/16559543_32353004_1000.jpg",
      par: "Philipp Plein",
      span: "logo-patch zip-up backpack",
      price: "448$",
      count: 0,
    },
  ]);

  function plus(prop){
    const plData = data.map((item) => {
        return item.id === prop.id ? {...item, count: item.count + 1} : item;
    });
    setData(plData);
  }

  function minus(prop){
    const plData = data.map((item) => {
        return item.id === prop.id ? { ...item, count: (item.count > 0 ? item.count - 1 : item.count) } : item;
    });
    setData(plData);
  }

  return (
    <ContextData.Provider value={{ data, plus, minus }}>{children}</ContextData.Provider>
  );
}

export default Context;
