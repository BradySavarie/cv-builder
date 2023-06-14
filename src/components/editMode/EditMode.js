import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

class EditMode extends Component {
    render() {
        const { inputs, handleInputChange, handleAddSection } = this.props;
        const { personalInfo, experience, education, projects, skills } =
            inputs;

        return (
            <div>
                <PersonalInfo
                    inputs={personalInfo}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                />
                <Experience
                    inputs={experience}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                />
                <Education
                    inputs={education}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                />
                <Projects
                    inputs={projects}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                />
                <Skills
                    inputs={skills}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                />
            </div>
        );
    }
}

export default EditMode;
