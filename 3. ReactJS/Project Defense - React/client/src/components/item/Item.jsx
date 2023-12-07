import { Link } from "react-router-dom";
import "./Item.css";

function Item({ props }) {
  return (
    <div className="item">
      <img src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className="item-prices">
        <div className="item-price">$1200</div>
      </div>
      <Link to={`/product/${props._id}`}>
        <button className="detail-btn">DETAILS</button>
      </Link>
    </div>
  );
}

export default Item;
