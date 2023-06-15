import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

class EditMode extends Component {
    render() {
        const {
            inputs,
            handleInputChange,
            handleAddSection,
            handleDeleteSection,
            handleReset,
            handleCreateSample,
        } = this.props;
        const { personalInfo, experience, education, projects, skills } =
            inputs;

        return (
            <div>
                <PersonalInfo
                    inputs={personalInfo}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                    handleDeleteSection={handleDeleteSection}
                />
                <Experience
                    inputs={experience}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                    handleDeleteSection={handleDeleteSection}
                />
                <Education
                    inputs={education}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                    handleDeleteSection={handleDeleteSection}
                />
                <Projects
                    inputs={projects}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                    handleDeleteSection={handleDeleteSection}
                />
                <Skills
                    inputs={skills}
                    handleInputChange={handleInputChange}
                    handleAddSection={handleAddSection}
                    handleDeleteSection={handleDeleteSection}
                />
                <button onClick={handleCreateSample}>Create Sample</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    }
}

export default EditMode;
