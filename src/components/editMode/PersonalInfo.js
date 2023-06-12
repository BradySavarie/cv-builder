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
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type="text"
                        name="location"
                        value={location}
                        placeholder="Location"
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                    ></input>
                    <input
                        type="email"
                        name="emailAddress"
                        value={emailAddress}
                        placeholder="Email Address"
                        onChange={handleInputChange}
                    ></input>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={bio}
                        onChange={handleInputChange}
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
