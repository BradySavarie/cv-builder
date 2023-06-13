import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

class PreviewMode extends Component {
    render() {
        const { inputs } = this.props;
        const { personalInfo, experience, education, projects, skills } =
            inputs;

        return (
            <div>
                <PersonalInfo inputs={personalInfo} />
                <Experience inputs={experience} />
                <Education inputs={education} />
                <Projects inputs={projects} />
                <Skills inputs={skills} />
            </div>
        );
    }
}

export default PreviewMode;
