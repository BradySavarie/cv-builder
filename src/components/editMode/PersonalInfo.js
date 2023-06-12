import React, { Component } from 'react';

class PersonalInfo extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const {
            firstName,
            lastName,
            location,
            phoneNumber,
            emailAddress,
            bio,
        } = inputs;

        return (
            <div>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="John"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Doe"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></input>
                    <label htmlFor="location">Location</label>
                    <input
                        id="location"
                        type="text"
                        name="location"
                        value={location}
                        placeholder="City, Province"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></input>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder="(555) 555 5555"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></input>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        type="email"
                        name="emailAddress"
                        value={emailAddress}
                        placeholder="johndoe@gmail.com"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></input>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={bio}
                        placeholder="Software developer available for hire in Toronto, Ontario"
                        onChange={handleInputChange}
                        data-component="personalInfo"
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
