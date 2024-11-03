import React from "react";
import PropTypes from "prop-types";

function FormButtons({ 
        className="",
        labelEnviar="Enviar",
        labelBorrarTodo="Borrar todo",
    }) {
    return (
		<div className={className}>
			<button type="submit">{labelEnviar}</button>
			<button type="reset">{labelBorrarTodo}</button>
		</div>
    );
}

FormButtons.propTypes = {
    className		: PropTypes.string,
    labelEnviar		: PropTypes.string,
    labelBorrarTodo	: PropTypes.string,
};

export default FormButtons;
