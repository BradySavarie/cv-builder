import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';

class EditMode extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { personalInfo, experience } = inputs;

        return (
            <div>
                <PersonalInfo
                    inputs={personalInfo}
                    handleInputChange={handleInputChange}
                />
                <Experience
                    inputs={experience}
                    handleInputChange={handleInputChange}
                />
            </div>
        );
    }
}

export default EditMode;
