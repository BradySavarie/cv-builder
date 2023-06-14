import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <form data-key={input.key}>
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                name="title"
                                value={input.title}
                                placeholder="CV-Builder"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={input.description}
                                placeholder="Auto-generates a formatted resume"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></textarea>
                            <label htmlFor="liveLink">Live Link</label>
                            <input
                                id="liveLink"
                                type="text"
                                name="liveLink"
                                value={input.liveLink}
                                placeholder="www.cv-builder.com"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>
                            <label htmlFor="repoLink">Repository Link</label>
                            <input
                                id="repoLink"
                                type="text"
                                name="repoLink"
                                value={input.repoLink}
                                placeholder="www.github.com/cv-builder"
                                onChange={handleInputChange}
                                data-component="projects"
                            ></input>
                        </form>
                    </div>
                ))}
            </div>
        );
    }
}

export default Projects;
