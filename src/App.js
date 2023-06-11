import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';

class App extends Component {
    constructor() {
        super();

        this.state = {
            mode: 'edit',
        };

        this.handleModeChange = this.handleModeChange.bind(this);
    }

    handleModeChange() {
        this.setState((prevState) => ({
            mode: prevState.mode === 'edit' ? 'preview' : 'edit',
        }));
    }

    render() {
        const { mode } = this.state;

        return (
            <div>
                <button onClick={this.handleModeChange}>
                    {mode === 'edit' ? 'Preview' : 'Edit'}
                </button>
                <PersonalInfo mode={mode} />
            </div>
        );
    }
}

export default App;
