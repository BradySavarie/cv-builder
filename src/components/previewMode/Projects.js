import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const { title, description, liveLink, repoLink } = this.props.inputs;

        return (
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{liveLink}</p>
                <p>{repoLink}</p>
            </div>
        );
    }
}

export default Projects;
