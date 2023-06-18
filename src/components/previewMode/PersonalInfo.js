import React, { Component } from 'react';
import { StyledPersonalInfoContainer } from '../styles/StyledPersonalInfoContainer';

class PersonalInfo extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <StyledPersonalInfoContainer>
                            <h1>
                                {input.firstName} {input.lastName}
                            </h1>
                            <div>
                                <p>{input.emailAddress}</p>
                                <p>{input.phoneNumber}</p>
                                <p>{input.location}</p>
                            </div>
                        </StyledPersonalInfoContainer>
                    </div>
                ))}
            </>
        );
    }
}

export default PersonalInfo;
