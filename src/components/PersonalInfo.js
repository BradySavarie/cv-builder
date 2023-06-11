import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            location: '',
            phoneNumber: '',
            emailAddress: '',
            bio: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { mode } = this.props;
        const {
            firstName,
            lastName,
            location,
            phoneNumber,
            emailAddress,
            bio,
        } = this.state;

        if (mode === 'edit') {
            return (
                <div>
                    <form>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        ></input>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={this.handleChange}
                        ></input>
                        <input
                            type="text"
                            name="location"
                            value={location}
                            placeholder="Location"
                            onChange={this.handleChange}
                        ></input>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={phoneNumber}
                            placeholder="Phone Number"
                            onChange={this.handleChange}
                        ></input>
                        <input
                            type="email"
                            name="emailAddress"
                            value={emailAddress}
                            placeholder="Email Address"
                            onChange={this.handleChange}
                        ></input>
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={bio}
                            onChange={this.handleChange}
                        ></textarea>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{location}</p>
                    <p>{phoneNumber}</p>
                    <p>{emailAddress}</p>
                    <p>{bio}</p>
                </div>
            );
        }
    }
}

export default PersonalInfo;
