import React from "react";
import { Form } from "react-bootstrap";

const Sort = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Form className="p-4 w-50 mt-n5" onSubmit={props.handleSubmit}>
      <Form.Group className="" htmlFor="sort"></Form.Group>
      <Form.Control as="select" onChange={handleChange}>
        <option value="name-ascending">
          &nbsp; SORT BY: Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </Form.Control>
    </Form>
  );
};

export default Sort;
