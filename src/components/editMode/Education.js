import React, { Component } from 'react';

class Education extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const {
            school,
            fieldOfStudy,
            qualification,
            enrollmentDate,
            graduationDate,
        } = inputs;

        return (
            <div>
                <form>
                    <label htmlFor="school">School</label>
                    <input
                        id="school"
                        type="text"
                        name="school"
                        value={school}
                        placeholder="Harvard University"
                        onChange={handleInputChange}
                        data-component="education"
                    ></input>
                    <label htmlFor="fieldOfStudy">Field Of Study</label>
                    <input
                        id="fieldOfStudy"
                        type="text"
                        name="fieldOfStudy"
                        value={fieldOfStudy}
                        placeholder="Computer Science"
                        onChange={handleInputChange}
                        data-component="education"
                    ></input>
                    <label htmlFor="qualification">Qualification</label>
                    <input
                        id="qualification"
                        type="text"
                        name="qualification"
                        value={qualification}
                        placeholder="Bachelors of Science"
                        onChange={handleInputChange}
                        data-component="education"
                    ></input>
                    <label htmlFor="enrollmentDate">Enrollment Date</label>
                    <input
                        id="enrollmentDate"
                        type="text"
                        name="enrollmentDate"
                        value={enrollmentDate}
                        placeholder="Month, Year"
                        onChange={handleInputChange}
                        data-component="education"
                    ></input>
                    <label htmlFor="graduationDate">Graduation Date</label>
                    <input
                        id="graduationDate"
                        type="text"
                        name="graduationDate"
                        value={graduationDate}
                        placeholder="Month, Year"
                        onChange={handleInputChange}
                        data-component="education"
                    ></input>
                </form>
            </div>
        );
    }
}

export default Education;
