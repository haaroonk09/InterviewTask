import { Card, Image, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-100">
      <Image
        src={`https://source.unsplash.com/1600x900/?${product?.name.toLowerCase()}`}
        alt={product?.name}
        className="w-100 h-100"
      />
      <Meta
        className="pt-3"
        title={product?.name}
        description={
          <p className="mb-0 d-flex align-items-center justify-content-between">
            <span>{product?.description}</span>
            <span>
              <Tag color="green">{product?.category.toLowerCase()}</Tag>
            </span>
          </p>
        }
      />
    </Card>
  );
};

export default ProductCard;
