import React, { Component } from 'react';
import { StyledForm } from '../styles/StyledForm';
import { StyledSectionHeading } from '../styles/StyledSectionHeading';

class PersonalInfo extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <StyledSectionHeading>
                            Personal Info
                        </StyledSectionHeading>
                        <StyledForm data-key={input.key}>
                            <input
                                type="text"
                                name="firstName"
                                value={input.firstName}
                                placeholder="First name"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />

                            <input
                                type="text"
                                name="lastName"
                                value={input.lastName}
                                placeholder="Last Name"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />

                            <input
                                type="text"
                                name="location"
                                value={input.location}
                                placeholder="Location"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                value={input.phoneNumber}
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />

                            <input
                                type="email"
                                name="emailAddress"
                                value={input.emailAddress}
                                placeholder="Email Address"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                        </StyledForm>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonalInfo;
