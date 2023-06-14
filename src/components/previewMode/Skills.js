import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <p>{input.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Skills;
