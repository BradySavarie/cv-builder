import React from 'react';
import { StyledForm } from '../styles/StyledForm';
import { StyledSectionHeading } from '../styles/StyledSectionHeading';
import { StyledSectionButton } from '../styles/StyledSectionButton';
import { StyledSectionContainer } from '../styles/StyledSectionContainer';

const Experience = (props) => {
    const { inputs, handleInputChange, handleAddSection, handleDeleteSection } =
        props;

    return (
        <div>
            <StyledSectionHeading>Experience</StyledSectionHeading>
            <StyledSectionContainer>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <StyledForm data-key={input.key}>
                            <input
                                type="text"
                                name="company"
                                value={input.company}
                                placeholder="Company"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>

                            <input
                                type="text"
                                name="title"
                                value={input.title}
                                placeholder="Title"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>

                            <input
                                type="text"
                                name="startDate"
                                value={input.startDate}
                                placeholder="Start Date"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>

                            <input
                                type="text"
                                name="endDate"
                                value={input.endDate}
                                placeholder="End Date"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>

                            <textarea
                                id="description"
                                name="description"
                                value={input.description}
                                placeholder="Job Description"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></textarea>
                        </StyledForm>
                        <StyledSectionButton
                            onClick={handleDeleteSection}
                            data-key={input.key}
                            data-component="experience"
                        >
                            Delete Experience
                        </StyledSectionButton>
                    </div>
                ))}
                <StyledSectionButton
                    onClick={handleAddSection}
                    data-component="experience"
                >
                    Add Experience
                </StyledSectionButton>
            </StyledSectionContainer>
        </div>
    );
};

export default Experience;
