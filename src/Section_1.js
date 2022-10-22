import { useContext } from "react";
import { ContextData } from "./Context";

function Section_1() {
  const { data, plus, minus } = useContext(ContextData);
  return (
    <>
      <div className="Section_1">
        <p className="par">Products</p>
        <div className="products_box">
          {data.map((item) => (
            <div className="mini_box" key={item.id}>
              <img
                src={item.img}
                alt="kiyim"
              />
              <p>{item.par}</p>
              <span>{item.span}</span>
              <b>{item.price}</b>
              {/* <p href="#">{item.id}</p> */}
              <div className="count">
                <button onClick={() => minus(item)}>-</button>
                <b>{item.count}</b>
                <button onClick={() => plus(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section_1;
