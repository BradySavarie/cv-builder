import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

class EditMode extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { personalInfo, experience, education } = inputs;

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
                <Education
                    inputs={education}
                    handleInputChange={handleInputChange}
                />
            </div>
        );
    }
}

export default EditMode;
