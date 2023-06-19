import React, { Component } from 'react';
import { StyledPreviewSectionHeader } from '../styles/StyledPreviewSectionHeader';
import { StyledPreviewSectionContainer } from '../styles/StyledPreviewSectionContainer';

class Projects extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <>
                <StyledPreviewSectionHeader>
                    Projects
                </StyledPreviewSectionHeader>
                {inputs.map((input) => (
                    <StyledPreviewSectionContainer>
                        <div className="projectContainer" key={input.key}>
                            <div className="projectDataContainer">
                                <p className="title">{input.title}</p>
                                <p className="description">
                                    {input.description}
                                </p>
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
                    </StyledPreviewSectionContainer>
                ))}
            </>
        );
    }
}

export default Projects;
