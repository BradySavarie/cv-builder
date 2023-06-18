import React, { Component } from 'react';

class PersonalInfo extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <h1>
                            {input.firstName} {input.lastName}
                        </h1>
                        <p>
                            {input.emailAddress} • {input.phoneNumber} •{' '}
                            {input.location}
                        </p>

                        <p>{input.bio}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonalInfo;
