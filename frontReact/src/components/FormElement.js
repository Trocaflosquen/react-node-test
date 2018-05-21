import React, { Component } from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'

const FormElement = ({propertyName, placeholder, defaultValue, inputRef }) => (
    <div>
        <ControlLabel>{placeholder}</ControlLabel>
        <FormControl
            type="text"
            id={propertyName}
            placeholder={placeholder}
            defaultValue={defaultValue}
            inputRef={inputRef}
        />
    </div>
) 

export default FormElement