import React from 'react';
import { StyledPersonalInfoContainer } from '../styles/StyledPersonalInfoContainer';

const PersonalInfo = (props) => {
    const { inputs } = props;

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
};

export default PersonalInfo;
