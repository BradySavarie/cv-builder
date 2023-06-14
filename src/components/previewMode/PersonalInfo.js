import React, { Component } from 'react';

class PersonalInfo extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <p>{input.firstName}</p>
                        <p>{input.lastName}</p>
                        <p>{input.location}</p>
                        <p>{input.phoneNumber}</p>
                        <p>{input.emailAddress}</p>
                        <p>{input.bio}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonalInfo;
