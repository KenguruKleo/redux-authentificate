import React from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

const FieldInput = ({ input, meta, type, placeholder, min, max }) => {
    return (
        <div>
            <FormControl
                type={type}
                placeholder={placeholder}
                min={min}
                max={max}
                value={input.value}
                onChange={input.onChange}
            />
            {meta.touched && meta.error && <span className="error">{meta.error}</span>}
        </div>
    )
};

export default FieldInput;