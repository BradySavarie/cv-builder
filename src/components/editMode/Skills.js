import React, { Component } from 'react';
import { StyledSectionContainer } from '../styles/StyledSectionContainer';
import { StyledSectionHeading } from '../styles/StyledSectionHeading';
import { StyledForm } from '../styles/StyledForm';
import { StyledSectionButton } from '../styles/StyledSectionButton';

class Skills extends Component {
    render() {
        const {
            inputs,
            handleInputChange,
            handleAddSection,
            handleDeleteSection,
        } = this.props;

        return (
            <>
                <StyledSectionContainer>
                    <StyledSectionHeading>Skills</StyledSectionHeading>
                    {inputs.map((input) => (
                        <div key={input.key}>
                            <StyledForm data-key={input.key}>
                                <input
                                    type="text"
                                    name="description"
                                    value={input.description}
                                    placeholder="Skill"
                                    onChange={handleInputChange}
                                    data-component="skills"
                                ></input>
                            </StyledForm>
                            <StyledSectionButton
                                onClick={handleDeleteSection}
                                data-key={input.key}
                                data-component="skills"
                            >
                                Delete Skill
                            </StyledSectionButton>
                        </div>
                    ))}
                    <StyledSectionButton
                        onClick={handleAddSection}
                        data-component="skills"
                    >
                        Add Skill
                    </StyledSectionButton>
                </StyledSectionContainer>
            </>
        );
    }
}

export default Skills;
