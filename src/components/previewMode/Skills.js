import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { description } = this.props.inputs;

        return (
            <div>
                <p>{description}</p>
            </div>
        );
    }
}

export default Skills;
