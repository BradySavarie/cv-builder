import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <p>{input.company}</p>
                        <p>{input.title}</p>
                        <p>{input.startDate}</p>
                        <p>{input.endDate}</p>
                        <p>{input.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Experience;
