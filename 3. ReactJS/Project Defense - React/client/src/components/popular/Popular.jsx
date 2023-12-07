import { useContext, useEffect, useState } from "react";
import "./Popular.css";
import Item from "../item/Item";

export default function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const req = async () => {
      const url = "http://localhost:3030/data/products?sortBy=bought%20desc";

      const request = await fetch(url, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });

      const result = await request.json();

      setPopularProducts(Object.values(result));
    };

    req();
  }, []);

  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.slice(0, 4).map((item) => (
          <Item key={item._id} props={item} />
        ))}
      </div>
    </div>
  );
}
