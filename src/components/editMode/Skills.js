import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const { inputs, handleInputChange } = this.props;

        return (
            <div>
                {inputs.map((input) => (
                    <div key={input.key}>
                        <form data-key={input.key}>
                            <label htmlFor="description">Skill</label>
                            <input
                                id="description"
                                type="text"
                                name="description"
                                value={input.description}
                                placeholder="React"
                                onChange={handleInputChange}
                                data-component="skills"
                            ></input>
                        </form>
                    </div>
                ))}
            </div>
        );
    }
}

export default Skills;
