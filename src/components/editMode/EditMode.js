import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';

class EditMode extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <PersonalInfo
                inputs={inputs}
                handleInputChange={handleInputChange}
            />
        );
    }
}

export default EditMode;
