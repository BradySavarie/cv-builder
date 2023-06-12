import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const { company, title, startDate, endDate, description } =
            this.props.inputs;
        return (
            <div>
                <p>{company}</p>
                <p>{title}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
                <p>{description}</p>
            </div>
        );
    }
}

export default Experience;
