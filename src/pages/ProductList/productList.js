import { Layout, Card, Image, Tag, Select, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./productList.css";
import { Container, Row, Col } from "react-bootstrap";
import Meta from "antd/es/card/Meta";
import products from "../../data/products.json";
import category from "../../data/category.json";
import ProductCard from "./ProductCard/productCard";

const { Content, Footer, Header } = Layout;

const ProductList = () => {
  const [productLists, setProductLists] = useState(products);
  const [categoryLists, setCategoryLists] = useState(category);

  const onChange = (value) => {
    console.log(`selected ${value}`);
    if (value == "All") {
      setProductLists(products);
    } else {
      let chooseCtg = products.filter(
        (product) => product?.category.toLowerCase() == value.toLowerCase()
      );
      setProductLists(chooseCtg);
    }
  };

  const typeSearch = (event) => {
    let filterList = products.filter((products) =>
      products.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProductLists(filterList);
  };

  return (
    <Layout>
      <Header className="header bg-primary p-0 ">
        <div className="d-flex align-items-center justify-content-center h-inherit text-white">
          Product List
        </div>
      </Header>
      <Content className="content">
        <Container className="">
          <Row className=" align-items-center justify-content-between pt-3">
            <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className="py-1">
              <Select
                className="w-100"
                showSearch
                placeholder="Choose a category"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={console.log}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={categoryLists.map((category) => {
                  return {
                    value: category,
                    label: category,
                  };
                })}
              />
            </Col>
            <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className="py-1">
              <Input
                allowClear
                className="w-100"
                placeholder="Search Product"
                onChange={typeSearch}
              />
            </Col>
          </Row>
          <Row>
            {productLists?.length > 0 ? (
              productLists.map((product) => {
                return (
                  <Col
                    xxl={3}
                    md={4}
                    xl={3}
                    lg={3}
                    sm={6}
                    xs={12}
                    className="py-3"
                    key={product?._id}
                  >
                    <ProductCard product={product} />
                  </Col>
                );
              })
            ) : (
              <Col className="d-flex align-items-center justify-content-center py-5">
                <p className="mb-0 text-muted">No products found</p>
              </Col>
            )}
          </Row>
        </Container>
      </Content>
    </Layout>
  );
};

export default ProductList;
