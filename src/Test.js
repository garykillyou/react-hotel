import React from 'react';
import PropTypes from 'prop-types';

class CampSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }
    render() {
        return (
            <div>
                <Camper name={this.props.name} />
            </div>
        );
    }
}
// change code below this line

const Camper = ({name}) => {

    return (
        <p>{name}</p>
    );
};

Camper.defaultProps = {
    name: "CamperBot"
}

Camper.propTypes = {
    name: PropTypes.string.isRequired
}

export default CampSite;