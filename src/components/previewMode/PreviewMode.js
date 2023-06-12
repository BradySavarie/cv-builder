import React, { Component } from 'react';
import PersonalInfo from '../previewMode/PersonalInfo';

class PreviewMode extends Component {
    render() {
        const { inputs } = this.props;
        return <PersonalInfo inputs={inputs} />;
    }
}

export default PreviewMode;
