import React from "react";
import PropTypes from "prop-types";

function MultiselectList({ 
        name,
        label,
		secondaryLabelText = "(haga clic mientras pulsa Control para elegir varios elementos)",
		secondaryLabelClass = "",
		itemQty=0,
        className="con-control",
		items,
    }) {
	return (
        <>
			<label htmlFor={name}>{label}</label>
			<label htmlFor={name} className={secondaryLabelClass}>{secondaryLabelText}</label>
			<select name={name} multiple size={itemQty > 0 ? itemQty : items.length} className={className}>
				{items.map((item, index) => (
					<option key={index} value={item.value}>{item.label}</option>
				))}
			</select>
        </>
    );
}

MultiselectList.propTypes = {
    name        		: PropTypes.string.isRequired,
    label       		: PropTypes.string.isRequired,
	secondaryLabelText	: PropTypes.string,
	secondaryLabelClass	: PropTypes.string,
	itemQty             : PropTypes.number,
    className			: PropTypes.string,
	items				: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.string,
		})
	)
};

export default MultiselectList;
