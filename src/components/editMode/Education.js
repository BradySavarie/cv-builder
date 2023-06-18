import React, { Component } from 'react';
import { StyledSectionContainer } from '../styles/StyledSectionContainer';
import { StyledSectionHeading } from '../styles/StyledSectionHeading';
import { StyledForm } from '../styles/StyledForm';
import { StyledSectionButton } from '../styles/StyledSectionButton';

class Education extends Component {
    render() {
        const {
            inputs,
            handleInputChange,
            handleAddSection,
            handleDeleteSection,
        } = this.props;

        return (
            <>
                <StyledSectionHeading>Education</StyledSectionHeading>
                <StyledSectionContainer>
                    {inputs.map((input) => (
                        <div key={input.key}>
                            <StyledForm data-key={input.key}>
                                <input
                                    type="text"
                                    name="school"
                                    value={input.school}
                                    placeholder="School"
                                    onChange={handleInputChange}
                                    data-component="education"
                                ></input>

                                <input
                                    type="text"
                                    name="fieldOfStudy"
                                    value={input.fieldOfStudy}
                                    placeholder="Field of Study"
                                    onChange={handleInputChange}
                                    data-component="education"
                                ></input>

                                <input
                                    type="text"
                                    name="qualification"
                                    value={input.qualification}
                                    placeholder="Qualification"
                                    onChange={handleInputChange}
                                    data-component="education"
                                ></input>

                                <input
                                    type="text"
                                    name="enrollmentDate"
                                    value={input.enrollmentDate}
                                    placeholder="Enrollment Date"
                                    onChange={handleInputChange}
                                    data-component="education"
                                ></input>

                                <input
                                    type="text"
                                    name="graduationDate"
                                    value={input.graduationDate}
                                    placeholder="Gradutation Date"
                                    onChange={handleInputChange}
                                    data-component="education"
                                ></input>
                            </StyledForm>
                            <StyledSectionButton
                                onClick={handleDeleteSection}
                                data-key={input.key}
                                data-component="education"
                            >
                                Delete Education
                            </StyledSectionButton>
                        </div>
                    ))}
                    <StyledSectionButton
                        onClick={handleAddSection}
                        data-component="education"
                    >
                        Add Education
                    </StyledSectionButton>
                </StyledSectionContainer>
            </>
        );
    }
}

export default Education;
