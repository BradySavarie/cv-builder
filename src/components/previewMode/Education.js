import React, { Component } from 'react';

class Education extends Component {
    render() {
        const {
            school,
            fieldOfStudy,
            qualification,
            enrollmentDate,
            graduationDate,
        } = this.props.inputs;

        return (
            <div>
                <p>{school}</p>
                <p>{fieldOfStudy}</p>
                <p>{qualification}</p>
                <p>{enrollmentDate}</p>
                <p>{graduationDate}</p>
            </div>
        );
    }
}

export default Education;
