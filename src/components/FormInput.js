import React, { useState } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";

import "./FormInput.scss";

const FormInput = (props) => {

  //separating input parameters from aux
  const { label, onChange, errorMsg, ...inputProps } = props;
  if(inputProps.type === 'checkbox')inputProps.value = 'true';

  //state for displaying error msg after loosing focus of input field
  const [wasFocused, setWasFocused] = useState(false);

  const handleWasFocused = () => {
    setWasFocused(true);
  };

  return (
    <FormGroup className="app__form-input-record" row>
      <Label for={inputProps.name} md={2}>
        {inputProps.type !== "checkbox" ? label : ""}
      </Label>
      <Col md={10} className="text-md-left app__form-input-field">
        <Input
          className="text-md-left"
          {...inputProps} //inserting all input parameters here
          onChange={onChange}
          onBlur={handleWasFocused}
          wasfocused={wasFocused.toString()}
          
        ></Input>

        {/*variation for checkboxes*/}
        {inputProps.type === "checkbox" ? <span>{label}</span> : ""}

        <span className="errorMsg">{errorMsg}</span>
      </Col>
    </FormGroup>
  );
};

export default FormInput;
