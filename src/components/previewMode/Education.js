import React, { Component } from 'react';

class Education extends Component {
    render() {
        const { inputs } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <p>{input.school}</p>
                        <p>{input.fieldOfStudy}</p>
                        <p>{input.qualification}</p>
                        <p>{input.enrollmentDate}</p>
                        <p>{input.graduationDate}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Education;
