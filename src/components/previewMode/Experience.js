import React from 'react';
import { StyledPreviewSectionContainer } from '../styles/StyledPreviewSectionContainer';
import { StyledPreviewSectionHeader } from '../styles/StyledPreviewSectionHeader';

const Experience = (props) => {
    const { inputs } = props;

    return (
        <>
            {inputs.length !== 0 && (
                <StyledPreviewSectionHeader>
                    Experience
                </StyledPreviewSectionHeader>
            )}
            <StyledPreviewSectionContainer>
                {inputs.map((input) => (
                    <div className="experienceContainer" key={input.key}>
                        <div className="experienceDataContainer">
                            <p>
                                {input.title}, {input.company}
                            </p>
                            <p>
                                {input.startDate} - {input.endDate}
                            </p>
                        </div>
                        <p>{input.description}</p>
                    </div>
                ))}
            </StyledPreviewSectionContainer>
        </>
    );
};

export default Experience;
