import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

class PreviewMode extends Component {
    render() {
        const { inputs } = this.props;
        const { personalInfo, experience, education } = inputs;
        return (
            <div>
                <PersonalInfo inputs={personalInfo} />
                <Experience inputs={experience} />
                <Education inputs={education} />
            </div>
        );
    }
}

export default PreviewMode;
