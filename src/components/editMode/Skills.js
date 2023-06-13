import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;
        const { description } = inputs;

        return (
            <form>
                <label htmlFor="description">Skill</label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={description}
                    placeholder="React"
                    onChange={handleInputChange}
                    data-component="skills"
                ></input>
            </form>
        );
    }
}

export default Skills;
