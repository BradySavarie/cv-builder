import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { title, description, liveLink, repoLink } = inputs;

        return (
            <form>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    placeholder="CV-Builder"
                    onChange={handleInputChange}
                    data-component="projects"
                ></input>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Auto-generates a formatted resume"
                    onChange={handleInputChange}
                    data-component="projects"
                ></textarea>
                <label htmlFor="liveLink">Live Link</label>
                <input
                    id="liveLink"
                    type="text"
                    name="liveLink"
                    value={liveLink}
                    placeholder="www.cv-builder.com"
                    onChange={handleInputChange}
                    data-component="projects"
                ></input>
                <label htmlFor="repoLink">Repository Link</label>
                <input
                    id="repoLink"
                    type="text"
                    name="repoLink"
                    value={repoLink}
                    placeholder="www.github.com/cv-builder"
                    onChange={handleInputChange}
                    data-component="projects"
                ></input>
            </form>
        );
    }
}

export default Projects;
