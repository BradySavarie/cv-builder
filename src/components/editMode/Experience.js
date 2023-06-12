import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { company, title, startDate, endDate, description } = inputs;
        return (
            <div>
                <form>
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={company}
                        placeholder="Apple Inc."
                        onChange={handleInputChange}
                        data-component="experience"
                    ></input>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Software Developer"
                        onChange={handleInputChange}
                        data-component="experience"
                    ></input>
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate"
                        type="text"
                        name="startDate"
                        value={startDate}
                        placeholder="Month, Year"
                        onChange={handleInputChange}
                        data-component="experience"
                    ></input>
                    <label htmlFor="endDate">End Date</label>
                    <input
                        id="endDate"
                        type="text"
                        name="endDate"
                        value={endDate}
                        placeholder="Month, Year"
                        onChange={handleInputChange}
                        data-component="experience"
                    ></input>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        placeholder="Design and build applications for the iOS platform"
                        onChange={handleInputChange}
                        data-component="experience"
                    ></textarea>
                </form>
            </div>
        );
    }
}

export default Experience;
