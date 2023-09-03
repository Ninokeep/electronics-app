import "./electronic.css";
import Stars from "../stars/stars";
import { Electronics } from "../../models/Electronics";

export default function Electronic(props: Electronics) {
  const backgroundImageStyle = {
    backgroundImage: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    width: "400px",
    borderRadius: "10px 10px 10px 10px",
  };
  return (
    <div className="container">
      <div style={backgroundImageStyle}></div>
      <div className="container-full-description">
        <div className="container-stars">
          <Stars rate={props.rate} color="#ff892f" />
        </div>
        <div className="title">{props.marque}</div>
        <div className="description">{props.description}</div>
        <div className="price">
          <div>
            <p className="price-value">{props.prix} $</p>
          </div>
          <div>
            <p className="add-cart">add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
