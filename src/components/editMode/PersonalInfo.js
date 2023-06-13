import React, { Component } from 'react';

class PersonalInfo extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <form data-key={input.key}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                value={input.firstName}
                                placeholder="John"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                value={input.lastName}
                                placeholder="Doe"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                            <label htmlFor="location">Location</label>
                            <input
                                id="location"
                                type="text"
                                name="location"
                                value={input.location}
                                placeholder="City, Province"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                id="phoneNumber"
                                type="tel"
                                name="phoneNumber"
                                value={input.phoneNumber}
                                placeholder="(555) 555 5555"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                            <label htmlFor="emailAddress">Email Address</label>
                            <input
                                id="emailAddress"
                                type="email"
                                name="emailAddress"
                                value={input.emailAddress}
                                placeholder="johndoe@gmail.com"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            />
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={input.bio}
                                placeholder="Software developer available for hire in Toronto, Ontario"
                                onChange={handleInputChange}
                                data-component="personalInfo"
                            ></textarea>
                        </form>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonalInfo;
