import React from "react";
import PropTypes from "prop-types";

function InputField({ 
        name,
		value="",
		onChange,
        label="",
        type="text",
        placeHolder="",
        className="con-control",
		isRequired=false,
    }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
				onChange={onChange}
				id={name}
				defaultValue={value}
                placeholder={placeHolder}
                className={className}
				required={isRequired}
            />
        </>
    );
}

InputField.propTypes = {
    name        	: PropTypes.string.isRequired,
	value			: PropTypes.string,
	onChange		: PropTypes.func,
    label       	: PropTypes.string,
    type        	: PropTypes.string,
    placeHolder 	: PropTypes.string,
    className   	: PropTypes.string,
	isRequired		: PropTypes.bool,
};

export default InputField;
