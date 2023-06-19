import React, { Component } from 'react';
import { StyledPreviewSectionHeader } from '../styles/StyledPreviewSectionHeader';
import { StyledPreviewSectionContainer } from '../styles/StyledPreviewSectionContainer';

class Education extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <>
                {inputs.length !== 0 && (
                    <StyledPreviewSectionHeader>
                        Education
                    </StyledPreviewSectionHeader>
                )}

                <StyledPreviewSectionContainer>
                    {inputs.map((input) => (
                        <div className="educationContainer" key={input.key}>
                            <div className="educationDataContainer">
                                <p>
                                    {input.school}, {input.qualification}
                                </p>
                                <p>
                                    {input.enrollmentDate} -{' '}
                                    {input.graduationDate}
                                </p>
                            </div>
                            <p>{input.fieldOfStudy}</p>
                        </div>
                    ))}
                </StyledPreviewSectionContainer>
            </>
        );
    }
}

export default Education;
