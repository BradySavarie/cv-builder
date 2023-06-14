import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <p>{input.title}</p>
                        <p>{input.description}</p>
                        <p>{input.liveLink}</p>
                        <p>{input.repoLink}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Projects;
