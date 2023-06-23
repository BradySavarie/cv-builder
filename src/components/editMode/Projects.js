import React from 'react';
import { StyledSectionContainer } from '../styles/StyledSectionContainer';
import { StyledSectionButton } from '../styles/StyledSectionButton';
import { StyledForm } from '../styles/StyledForm';
import { StyledSectionHeading } from '../styles/StyledSectionHeading';

const Projects = (props) => {
    const { inputs, handleInputChange, handleAddSection, handleDeleteSection } =
        props;

    return (
        <>
            <StyledSectionContainer>
                <StyledSectionHeading>Projects</StyledSectionHeading>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <StyledForm data-key={input.key}>
                            <input
                                type="text"
                                name="title"
                                value={input.title}
                                placeholder="Title"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>

                            <textarea
                                name="description"
                                value={input.description}
                                placeholder="Description"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></textarea>

                            <input
                                type="text"
                                name="liveLink"
                                value={input.liveLink}
                                placeholder="Live Link"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>

                            <input
                                type="text"
                                name="repoLink"
                                value={input.repoLink}
                                placeholder="Repository Link"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>
                        </StyledForm>
                        <StyledSectionButton
                            onClick={handleDeleteSection}
                            data-key={input.key}
                            data-component="projects"
                        >
                            Delete Project
                        </StyledSectionButton>
                    </div>
                ))}
                <StyledSectionButton
                    onClick={handleAddSection}
                    data-component="projects"
                >
                    Add Project
                </StyledSectionButton>
            </StyledSectionContainer>
        </>
    );
};

export default Projects;
