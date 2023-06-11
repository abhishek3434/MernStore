import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  const id = product._id;
  const name = product.name;
  const rating = product.rating;
  const numReviews = product.numReviews;
  const price = product.price;
  const imagePath = product.image;

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${id}`}>
        <Card.Img src={imagePath} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${id}`}>
          <Card.Title as="div">{name}</Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {/* {rating} from {numReviews} reviews */}
            <Rating text={`${numReviews} reviews`} value={rating} color="gold" />
          </div>
        </Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
