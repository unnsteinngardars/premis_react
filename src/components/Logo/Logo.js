import React from "react";
import PropTypes from "prop-types";

const Logo = ({ logo, size }) => (
    <div>
        <img style={{height: size}} src={logo} alt=""/>
    </div>
)

Logo.propTypes = {
    logo: PropTypes.string.isRequired,
    size: PropTypes.number
}

export default Logo;