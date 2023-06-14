import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const { inputs, handleInputChange, handleAddSection } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <form data-key={input.key}>
                            <label htmlFor="company">Company</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                value={input.company}
                                placeholder="Apple Inc."
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={input.title}
                                placeholder="Software Developer"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                id="startDate"
                                type="text"
                                name="startDate"
                                value={input.startDate}
                                placeholder="Month, Year"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>
                            <label htmlFor="endDate">End Date</label>
                            <input
                                id="endDate"
                                type="text"
                                name="endDate"
                                value={input.endDate}
                                placeholder="Month, Year"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></input>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={input.description}
                                placeholder="Design and build applications for the iOS platform"
                                onChange={handleInputChange}
                                data-component="experience"
                            ></textarea>
                        </form>
                    </div>
                ))}
                <button onClick={handleAddSection} data-component="experience">
                    Add Experience
                </button>
            </div>
        );
    }
}

export default Experience;
