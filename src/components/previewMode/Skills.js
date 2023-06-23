import React from 'react';
import { StyledPreviewSectionHeader } from '../styles/StyledPreviewSectionHeader';
import { StyledPreviewSectionContainer } from '../styles/StyledPreviewSectionContainer';

const Skills = (props) => {
    const { inputs } = props;

    return (
        <>
            {inputs.length !== 0 && (
                <StyledPreviewSectionHeader>Skills</StyledPreviewSectionHeader>
            )}

            <StyledPreviewSectionContainer>
                {inputs.map((input) => (
                    <ul className="skillsContainer" key={input.key}>
                        <li>{input.description}</li>
                    </ul>
                ))}
            </StyledPreviewSectionContainer>
        </>
    );
};

export default Skills;
