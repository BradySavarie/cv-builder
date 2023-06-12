import React, { Component } from 'react';

class PersonalInfo extends Component {
    render() {
        const {
            firstName,
            lastName,
            location,
            phoneNumber,
            emailAddress,
            bio,
        } = this.props.inputs;
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

export default PersonalInfo;
