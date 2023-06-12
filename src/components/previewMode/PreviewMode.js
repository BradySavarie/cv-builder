import React, { Component } from 'react';
import PersonalInfo from '../previewMode/PersonalInfo';
import Experience from '../previewMode/Experience';

class PreviewMode extends Component {
    render() {
        const { inputs } = this.props;
        const { personalInfo, experience } = inputs;
        return (
            <div>
                <PersonalInfo inputs={personalInfo} />
                <Experience inputs={experience} />
            </div>
        );
    }
}

export default PreviewMode;
