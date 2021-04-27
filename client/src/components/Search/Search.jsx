import React from "react";
import { Form } from "react-bootstrap";

const Search = (props) => {
  return (
    <Form
      className="w-50 mt-n2 float-right mr-2"
      onSubmit={(e) => props.onSubmit(e)}
    >
      <Form.Control
        className="search-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </Form>
  );
};

export default Search;
