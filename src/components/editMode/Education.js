import React, { Component } from 'react';

class Education extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <form data-key={input.key}>
                            <label htmlFor="school">School</label>
                            <input
                                id="school"
                                type="text"
                                name="school"
                                value={input.school}
                                placeholder="Harvard University"
                                onChange={handleInputChange}
                                data-component="education"
                            ></input>
                            <label htmlFor="fieldOfStudy">Field Of Study</label>
                            <input
                                id="fieldOfStudy"
                                type="text"
                                name="fieldOfStudy"
                                value={input.fieldOfStudy}
                                placeholder="Computer Science"
                                onChange={handleInputChange}
                                data-component="education"
                            ></input>
                            <label htmlFor="qualification">Qualification</label>
                            <input
                                id="qualification"
                                type="text"
                                name="qualification"
                                value={input.qualification}
                                placeholder="Bachelors of Science"
                                onChange={handleInputChange}
                                data-component="education"
                            ></input>
                            <label htmlFor="enrollmentDate">
                                Enrollment Date
                            </label>
                            <input
                                id="enrollmentDate"
                                type="text"
                                name="enrollmentDate"
                                value={input.enrollmentDate}
                                placeholder="Month, Year"
                                onChange={handleInputChange}
                                data-component="education"
                            ></input>
                            <label htmlFor="graduationDate">
                                Graduation Date
                            </label>
                            <input
                                id="graduationDate"
                                type="text"
                                name="graduationDate"
                                value={input.graduationDate}
                                placeholder="Month, Year"
                                onChange={handleInputChange}
                                data-component="education"
                            ></input>
                        </form>
                    </div>
                ))}
            </div>
        );
    }
}

export default Education;
