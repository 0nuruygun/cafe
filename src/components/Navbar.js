import React from "react";
import PropTypes from "prop-types";
function Navbar(params) {
    return(
        <h4>{params.title}</h4>
    )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProbs = {
    title : 'Default'
}

export default Navbar