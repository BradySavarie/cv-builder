import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

class EditMode extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { personalInfo, experience, education, projects, skills } =
            inputs;

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
                <Projects
                    inputs={projects}
                    handleInputChange={handleInputChange}
                />
                <Skills inputs={skills} handleInputChange={handleInputChange} />
            </div>
        );
    }
}

export default EditMode;
