import React from 'react';
import { StyledPreviewSectionHeader } from '../styles/StyledPreviewSectionHeader';
import { StyledPreviewSectionContainer } from '../styles/StyledPreviewSectionContainer';

const Projects = (props) => {
    const { inputs } = props;

    return (
        <>
            {inputs.length !== 0 && (
                <StyledPreviewSectionHeader>
                    Projects
                </StyledPreviewSectionHeader>
            )}

            <StyledPreviewSectionContainer>
                {inputs.map((input) => (
                    <div className="projectContainer" key={input.key}>
                        <div className="projectDataContainer">
                            <p className="title">{input.title}</p>
                            <p className="description">{input.description}</p>
                        </div>
                        <div className="projectLinksContainer">
                            <p>
                                <strong>Live Link:</strong> {input.liveLink}
                            </p>
                            <p>
                                <strong>Repository Link:</strong>{' '}
                                {input.repoLink}
                            </p>
                        </div>
                    </div>
                ))}
            </StyledPreviewSectionContainer>
        </>
    );
};

export default Projects;
